// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  CREATE_ORDER,
  CREATE_ORDER_ITEM,
  PUBLISH_ORDER,
  PUBLISH_ORDER_ITEM,
} from "../../graphql/order";
import { clientMutation } from "../../lib/urql";

type Cart = {
  id: string;
  category: string;
  product: string;
  thumbnail: string;
  name: string;
  quantity: number;
  total: number;
  size: string;
};

type Order = {
  name: string;
  phone: string;
  city: string;
  state: string;
  information?: string;
  email: string;
  total: number;
};

type Data = {
  id?: string;
  message?: string;
};

async function saveOrderItem(item: any) {
  await clientMutation.mutation(CREATE_ORDER_ITEM, item).toPromise();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { order, items } = req.body;

  const orderParsed: Order = JSON.parse(order);
  const itemsParsed: Cart[] = JSON.parse(items);

  try {
    const { data: dataCreateOrder, error: errorCreateOrder } =
      await clientMutation.mutation(CREATE_ORDER, orderParsed).toPromise();
    if (errorCreateOrder) {
      res.status(400).json({
        message: `Ocorreu um erro ao salvar o pedido: ${errorCreateOrder.message}`,
      });
    }

    const orderID = dataCreateOrder.createOrder.id;

    const { error: errorPublishOrder } = await clientMutation
      .mutation(PUBLISH_ORDER, { id: orderID })
      .toPromise();

    if (errorPublishOrder) {
      res.status(400).json({
        message: `Ocorreu um erro ao publicar o pedido: ${errorPublishOrder.message}`,
      });
    }

    await itemsParsed.map((item) => {
      let info = {
        product: item.product,
        order: orderID,
        quantity: item.quantity,
        total: item.total,
        size: item.size,
      };
      saveOrderItem(info);
    });

    const { error: errorPublishOrderItems } = await clientMutation
      .mutation(PUBLISH_ORDER_ITEM, { id: orderID })
      .toPromise();

    if (errorPublishOrderItems) {
      res.status(400).json({
        message: `Ocorreu um erro ao publicar os itens do pedido: ${errorPublishOrderItems.message}`,
      });
    }

    res.status(200).json({
      message: "Pedido realizado, aguarde para visualizar suas informações",
      id: orderID,
    });
  } catch (error) {
    res.status(400).json({ message: "Ocorreu um erro ao finalizar o pedido" });
  }
}
