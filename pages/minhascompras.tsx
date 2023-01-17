import { NextPage } from "next";
import Image from "next/image";
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";
import { useQuery } from "urql";
import { FIND_ORDER } from "../graphql/order";
import Toast from "../components/layout/Toast";
import Link from "next/link";
import Steps from "../components/layout/Steps";

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
  id: string;
  name: string;
  phone: string;
  city: string;
  state: string;
  information?: string;
  email: string;
  total: number;
  items: Cart[];
  statusSale: string;
  createdAt: Date;
  rastreio?: string;
};

interface ToastInfo {
  title: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
}

const MinhasCompras: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [orderToShow, setOrderToShow] = useState<Order[]>([]);
  const [showItems, setShowItems] = useState<string>("");

  const [toast, setToast] = useState<ToastInfo>({
    title: "",
    message: "",
    type: "info",
  });
  const [openToast, setOpenToast] = useState<boolean>(false);

  const [findOrderResults, findOrder] = useQuery({
    query: FIND_ORDER,
    variables: { email: email },
  });

  const { fetching, data, error } = findOrderResults;

  useEffect(() => {
    if (data) {
      setOrderToShow(data.orders);
    }
    if (error) {
      let message = error.message;
      setToast({
        title: "Erro",
        message: message,
        type: "error",
      });
      setOpenToast(true);
    }
  }, [data, error]);

  const calcPrice = (price: number) => {
    let transform = price / 100;
    return transform.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  function formateDate(date: Date) {
    const initialDate = new Date(date);
    const day = initialDate.getDate();
    const month = initialDate.toLocaleString("pt-br", { month: "long" });
    const year = initialDate.getFullYear();

    return `${day} de ${month} de ${year}`;
  }

  return (
    <Fragment>
      <Toast
        title={toast.title}
        message={toast.message}
        onClose={setOpenToast}
        open={openToast}
        scheme={toast.type}
      />
      <HeadApp
        title="Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <div className="bg-gradient-to-b h-52 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
        <ShoppingCart className="text-7xl" />
        <strong className="text-3xl mt-2">MINHAS COMPRAS</strong>
      </div>

      <section className="container mx-auto max-w-3xl px-5 xl:px-0 my-10">
        <div className="flex items-end gap-3 w-full mb-10">
          <div className="w-full">
            <label htmlFor="name" className="block">
              Insira o seu email <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <Button isLoading={fetching} onClick={findOrder}>
            <MagnifyingGlass />
            Buscar
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          {orderToShow.map((order) => (
            <div
              className="rounded-md border shadow overflow-hidden"
              key={order.id}
            >
              <div className="text-sm sm:text-base">
                <div className="px-3 py-2 sm:px-6">
                  <Steps step={order.statusSale} />
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-zinc-50 px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-500">ID</dt>
                      <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                        {order.id}
                      </dd>
                    </div>
                    <div className="bg-white px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-500">Cliente</dt>
                      <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                        {order.name}
                      </dd>
                    </div>
                    <div className="bg-zinc-50 px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-500">Telefone</dt>
                      <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                        {order.phone}
                      </dd>
                    </div>
                    <div className="bg-white px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-500">
                        Data da compra
                      </dt>
                      <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                        {formateDate(order.createdAt)}
                      </dd>
                    </div>
                    <div className="bg-zinc-50 px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-500">Endereço</dt>
                      <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                        <div className="flex flex-col">
                          <span>Cidade: {order.city}</span>
                          <span>Estado: {order.state}</span>
                        </div>
                      </dd>
                    </div>
                    <div className="px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="font-medium text-gray-500">Informações</dt>
                      <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                        {order.information}
                      </dd>
                    </div>
                    {order.rastreio?.length && (
                      <div className="bg-zinc-50 px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="font-medium text-gray-500">
                          Rastreamento
                        </dt>
                        <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                          <Link href={order.rastreio} passHref>
                            <a
                              className="text-sky-700 hover:underline"
                              target={"_blank"}
                            >
                              Clique aqui para rastrear
                            </a>
                          </Link>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
              <div className="border-t">
                <div className="py-2 px-10">
                  {showItems === order.id ? (
                    <Button
                      onClick={() => setShowItems("")}
                      isFullSize
                      variant="outline"
                    >
                      Ocultar itens
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setShowItems(order.id)}
                      isFullSize
                      variant="outline"
                    >
                      Mostrar itens
                    </Button>
                  )}
                </div>
                {showItems === order.id && (
                  <div className="grid grid-cols-1 divide-y border-t">
                    {order.items.map((item) => (
                      <div
                        className="grid grid-cols-[70px_1fr] sm:grid-cols-[100px_1fr] gap-5 px-5 py-2"
                        key={item.id}
                      >
                        <div>
                          <Image
                            src={item.thumbnail}
                            width={600}
                            height={600}
                            layout="responsive"
                            alt="Braz Multimidia"
                          />
                        </div>
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <strong className="font-bold text-marinho-500 sm:text-lg">
                              {item.name}
                            </strong>
                            <span className="text-sm sm:text-base">
                              Quantidade: {item.quantity}
                            </span>
                            <span className="text-sm sm:text-base">
                              Categoria: {item.category}
                            </span>
                          </div>
                          <div className="w-32 font-bold text-right sm:text-lg">
                            {calcPrice(item.total)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-between p-4 border-t text-xl font-bold text-marinho-500 bg-zinc-50">
                <span>Total da compra</span>
                <span>{calcPrice(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default MinhasCompras;
