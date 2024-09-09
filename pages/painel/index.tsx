import {
  ArrowFatLineLeft,
  ArrowFatLineRight,
  Fingerprint,
  FloppyDisk,
  MagnifyingGlass,
  NotePencil,
  ShoppingCart,
  SignIn,
  X,
} from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import Button from "../../components/layout/Button";
import HeadApp from "../../components/layout/Head";
import Header from "../../components/layout/Header";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { clientMutation, clientQuery } from "../../lib/urql";
import {
  FIND_ORDERS_PAG,
  FIND_ORDERS_PAG_EMAIL,
  FIND_ORDERS_PAG_NAME,
  PUBLISH_ORDER,
  UPDATE_SHIPPING,
  UPDATE_STATUS,
} from "../../graphql/order";
import Toast from "../../components/layout/Toast";
import { useMutation } from "urql";
import { AUTH_PANEL } from "../../graphql/auth";

interface ToastInfo {
  title: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
}

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

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
}

export default function Orders() {
  const [statusDialog, setStatusDialog] = useState<boolean>(false);
  const [orderDialog, setOrderDialog] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("all");
  const [page, setPage] = useState<number>(0);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shippingUrl, setShippingUrl] = useState<string>("");
  const [statusSale, setStatusSale] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [orders, setOrders] = useState<Order[]>([]);

  const [toast, setToast] = useState<ToastInfo>({
    title: "",
    message: "",
    type: "info",
  });
  const [openToast, setOpenToast] = useState<boolean>(false);

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

  async function findAllOrders() {
    setIsLoading(true);
    const { data, error } = await clientQuery
      .query(FIND_ORDERS_PAG, { page }, { requestPolicy: "network-only" })
      .toPromise();

    if (error) {
      setToast({
        title: "Erro",
        message: error.message,
        type: "error",
      });
      setOpenToast(true);
      setIsLoading(false);
    }

    if (data) {
      setOrders(data.orders);
      setPageInfo(data.ordersConnection.pageInfo);
      setIsLoading(false);
    }
  }

  async function findOrdersByName() {
    setIsLoading(true);
    const { data, error } = await clientQuery
      .query(
        FIND_ORDERS_PAG_NAME,
        { page, name },
        { requestPolicy: "network-only" }
      )
      .toPromise();

    if (error) {
      setToast({
        title: "Erro",
        message: error.message,
        type: "error",
      });
      setOpenToast(true);
      setIsLoading(false);
    }

    if (data) {
      setOrders(data.orders);
      setPageInfo(data.ordersConnection.pageInfo);
      setIsLoading(false);
    }
  }

  async function findOrdersByEmail() {
    setIsLoading(true);
    const { data, error } = await clientQuery
      .query(
        FIND_ORDERS_PAG_EMAIL,
        { page, name },
        { requestPolicy: "network-only" }
      )
      .toPromise();

    if (error) {
      setToast({
        title: "Erro",
        message: error.message,
        type: "error",
      });
      setOpenToast(true);
      setIsLoading(false);
    }

    if (data) {
      setOrders(data.orders);
      setPageInfo(data.ordersConnection.pageInfo);
      setIsLoading(false);
    }
  }

  function handleSearch() {
    if (search === "all") {
      findAllOrders();
    }
    if (search === "name") {
      findOrdersByName();
    }
    if (search === "email") {
      findOrdersByEmail();
    }
  }

  useEffect(() => {
    handleSearch();
    if (search === "all") {
      setName("");
    }
  }, [search, page]);

  function handleOrder(id: string) {
    const result = orders.find((obj) => obj.id === id);
    if (result?.rastreio) {
      setShippingUrl(result.rastreio);
    }
    setOrder(result || null);
    setOrderDialog(true);
  }

  function handlePreviousPage() {
    setPage(page - 20);
    handleSearch();
  }

  function handleNextPage() {
    setPage(page + 20);
    handleSearch();
  }

  useEffect(() => {
    !orderDialog && setShippingUrl("");
  }, [orderDialog]);

  function handleStatus(id: string, status: string) {
    setOrderId(id);
    setStatusSale(status);
    setStatusDialog(true);
  }

  const [publishOrderResult, setPublishOrder] = useMutation(PUBLISH_ORDER);

  async function publishOrder(id: string) {
    const { data, error } = await setPublishOrder({ id });

    if (error) {
      if (error) {
        setToast({
          title: "Erro",
          message: error.message,
          type: "error",
        });
        setOpenToast(true);
      }
    }

    if (data) {
      handleSearch();
    }
  }

  const [updateStatusResult, setUpdateStatus] = useMutation(UPDATE_STATUS);
  const [updateShippingUrlResults, setUpdateShippingUrl] =
    useMutation(UPDATE_SHIPPING);

  async function updateStatus() {
    setLoadingUpdate(true);

    const { data, error } = await setUpdateStatus(
      { id: orderId, statusSale },
      { requestPolicy: "network-only" }
    );

    if (error) {
      setToast({
        title: "Erro",
        message: error.message,
        type: "error",
      });
      setOpenToast(true);
      setLoadingUpdate(false);
    }

    if (data) {
      setToast({
        title: "Sucesso",
        message: "Informação alterada com sucesso",
        type: "success",
      });
      setOpenToast(true);
      setLoadingUpdate(false);
      setStatusDialog(false);
      publishOrder(data.updateOrder.id);
    }
  }

  async function updateShippingUrl(id: string) {
    setLoadingUpdate(true);
    const { data, error } = await setUpdateShippingUrl({
      id,
      rastreio: shippingUrl,
    });

    if (error) {
      setToast({
        title: "Erro",
        message: error.message,
        type: "error",
      });
      setOpenToast(true);
      setLoadingUpdate(false);
    }

    if (data) {
      setToast({
        title: "Sucesso",
        message: "Informação alterada com sucesso",
        type: "success",
      });
      setOpenToast(true);
      setLoadingUpdate(false);
      setStatusDialog(false);
      publishOrder(data.updateOrder.id);
    }
  }

  async function Login() {
    setLoadingUpdate(true);
    const { data, error } = await clientQuery
      .query(AUTH_PANEL, { usuario: userName })
      .toPromise();

    if (error) {
      setToast({
        title: "Erro",
        message: error.message,
        type: "error",
      });
      setOpenToast(true);
      setLoadingUpdate(false);
    }

    if (data) {
      if (!data.usuariosMaster) {
        setToast({
          title: "Erro",
          message: "Usuário não encontrado",
          type: "error",
        });
        setOpenToast(true);
      }

      if (data.usuariosMaster.senha !== password) {
        setToast({
          title: "Erro",
          message: "Senha incorreta",
          type: "error",
        });
        setOpenToast(true);
      }

      setUser(data.usuariosMaster.id);

      setLoadingUpdate(false);
    }
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
        title={
          !user.length
            ? "Login | Palmieri Uniformes"
            : "Pedidos | Palmieri Uniformes"
        }
      />
      {!user.length ? (
        <div className="w-screen h-screen flex justify-center items-center p-5 bg-gradient-to-r from-marinho-500 to-orange-500">
          <div className="w-full max-w-xs border rounded-md shadow-lg p-5 bg-white bg-opacity-95 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center border-b pb-3">
              <Fingerprint className="text-orange-500 text-5xl" />
              <span className="font-bold text-lg text-marinho-500">LOGIN</span>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <input
                id="user"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
                placeholder="Usuário"
                autoFocus
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                id="password"
                className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
                placeholder="Senha"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                isFullSize
                buttonSize="lg"
                isLoading={loadingUpdate}
                onClick={() => Login()}
              >
                <SignIn />
                Login
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="bg-gradient-to-b h-36 from-marinho-500 to-marinho-900 flex justify-center items-center flex-col px-5 text-white text-center">
            <ShoppingCart className="text-6xl" />
            <strong className="text-3xl mt-2">PEDIDOS</strong>
          </div>

          <section className="container mx-auto px-5 xl:px-0 max-w-5xl py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3 border-b mb-5 pb-5 items-end">
              <div>
                <label>Selecione uma opção</label>
                <select
                  className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full bg-transparent"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                >
                  <option value={"all"}>Todas as vendas</option>
                  <option value={"name"}>Por nome</option>
                  <option value={"email"}>Por email</option>
                </select>
              </div>

              <div>
                <label>Digite para buscar</label>
                <input
                  className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full bg-white disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={search === "all"}
                  placeholder="Digite para buscar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <Button
                isFullSize
                onClick={() => handleSearch()}
                isLoading={isLoading}
              >
                <MagnifyingGlass />
                Buscar
              </Button>
            </div>

            <div className="w-full border rounded-md overflow-hidden max-w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-start py-2 px-3 border-b uppercase text-zinc-600 min-w-[200px]">
                      Cliente
                    </th>
                    <th className="text-start py-2 px-3 border-b uppercase text-zinc-600 min-w-[125px]">
                      Telefone
                    </th>
                    <th className="text-start py-2 px-3 border-b uppercase text-zinc-600 min-w-[100px]">
                      Valor
                    </th>
                    <th className="text-start py-2 px-3 border-b uppercase text-zinc-600">
                      Status
                    </th>
                    <th className="text-start py-2 px-3 border-b uppercase text-zinc-600">
                      Data
                    </th>
                    <th className="text-start py-2 px-3 border-b uppercase text-zinc-600">
                      Opções
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((orderUnique) => (
                    <tr key={orderUnique.id}>
                      <td className="text-start py-2 px-3 border-b">
                        {orderUnique.name}
                      </td>
                      <td className="text-start py-2 px-3 border-b">
                        {orderUnique.phone}
                      </td>
                      <td className="text-start py-2 px-3 border-b">
                        {calcPrice(orderUnique.total)}
                      </td>
                      <td className="text-start py-2 px-3 border-b">
                        <div className="w-full flex items-center gap-2">
                          {orderUnique.statusSale === "Negociando" && (
                            <span className="block w-full text-center px-3 py-1 bg-yellow-100 rounded-md">
                              Negociando
                            </span>
                          )}
                          {orderUnique.statusSale === "Pagamento" && (
                            <span className="block w-full text-center px-3 py-1 bg-green-100 rounded-md">
                              Pagamento
                            </span>
                          )}
                          {orderUnique.statusSale === "Arte" && (
                            <span className="block w-full text-center px-3 py-1 bg-sky-100 rounded-md">
                              Confirmação de Arte
                            </span>
                          )}
                          {orderUnique.statusSale === "Produção" && (
                            <span className="block w-full text-center px-3 py-1 bg-sky-100 rounded-md">
                              Produção
                            </span>
                          )}
                          {orderUnique.statusSale === "Envio" && (
                            <span className="block w-full text-center px-3 py-1 bg-green-100 rounded-md">
                              Envio
                            </span>
                          )}
                          <Button
                            buttonSize="xs"
                            scheme="warning"
                            onClick={() =>
                              handleStatus(
                                orderUnique.id,
                                orderUnique.statusSale
                              )
                            }
                          >
                            <NotePencil />
                          </Button>
                        </div>
                      </td>
                      <td className="text-start py-2 px-3 border-b">
                        {formateDate(orderUnique.createdAt)}
                      </td>
                      <td className="text-start py-2 px-3 border-b">
                        <Button
                          buttonSize="xs"
                          isFullSize
                          onClick={() => handleOrder(orderUnique.id)}
                        >
                          Visualizar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {pageInfo && (
                <div className="w-full p-2 flex justify-center items-center bg gap-3">
                  <Button
                    variant="outline"
                    isDisabled={!pageInfo.hasNextPage}
                    onClick={() => handlePreviousPage()}
                  >
                    <ArrowFatLineLeft />
                    Anterior
                  </Button>
                  <Button
                    variant="outline"
                    isDisabled={!pageInfo.hasPreviousPage}
                    onClick={() => handleNextPage()}
                  >
                    Próxima
                    <ArrowFatLineRight />
                  </Button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <Dialog.Root
        onOpenChange={() => setStatusDialog(false)}
        open={statusDialog}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="overlay" />
          <Dialog.Content className="dialog-content p-2">
            <div className="dialog-body max-w-xs">
              <div className="dialog-header">
                <span>Status do Pedido</span>
                <Dialog.Close className="dialog-close">
                  <X />
                </Dialog.Close>
              </div>

              <div className="px-3 pb-3 flex flex-col gap-3">
                <select
                  className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full bg-transparent"
                  value={statusSale}
                  onChange={(e) => setStatusSale(e.target.value)}
                >
                  <option value={"Negociando"}>Negociando</option>
                  <option value={"Pagamento"}>Pagamento Aprovado</option>
                  <option value={"Arte"}>Confirmação de Arte</option>
                  <option value={"Produção"}>Produção</option>
                  <option value={"Envio"}>Envio</option>
                </select>
                <Button
                  isFullSize
                  isLoading={loadingUpdate}
                  onClick={() => updateStatus()}
                >
                  <FloppyDisk />
                  Salvar
                </Button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root
        onOpenChange={() => setOrderDialog(false)}
        open={orderDialog}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="overlay" />
          <Dialog.Content className="dialog-content-order p-2 overflow-auto">
            <div className="dialog-body max-w-3xl">
              <div className="dialog-header">
                <span>Pedido</span>
                <Dialog.Close className="dialog-close">
                  <X />
                </Dialog.Close>
              </div>

              {order && (
                <div key={order.id}>
                  <div className="text-sm sm:text-base">
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
                          <dt className="font-medium text-gray-500">
                            Telefone
                          </dt>
                          <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                            {order.phone}
                          </dd>
                        </div>
                        <div className="bg-white px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="font-medium text-gray-500">
                            Data da compra
                          </dt>
                          <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                            {formateDate(new Date(order.createdAt))}
                          </dd>
                        </div>
                        <div className="bg-zinc-50 px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="font-medium text-gray-500">
                            Endereço
                          </dt>
                          <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                            <div className="flex flex-col">
                              <span>Cidade: {order.city}</span>
                              <span>Estado: {order.state}</span>
                            </div>
                          </dd>
                        </div>
                        <div className="px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="font-medium text-gray-500">
                            Informações
                          </dt>
                          <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                            {order.information}
                          </dd>
                        </div>
                        {order.statusSale === "Envio" && (
                          <div className="bg-zinc-50 px-3 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="font-medium text-gray-500">
                              Rastreamento
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                              <div className="flex items-center gap-2">
                                <input
                                  className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full bg-white"
                                  placeholder="URL de rastreamento"
                                  value={shippingUrl}
                                  onChange={(e) =>
                                    setShippingUrl(e.target.value)
                                  }
                                />
                                <Button
                                  isLoading={loadingUpdate}
                                  onClick={() => updateShippingUrl(order.id)}
                                >
                                  Salvar
                                </Button>
                              </div>
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>
                  <div className="border-t">
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
                              alt="Palmieri Uniformes"
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
                  </div>
                  <div className="flex justify-between p-4 border-t text-xl font-bold text-marinho-500 bg-zinc-50 rounded-b-md">
                    <span>Total da compra</span>
                    <span>{calcPrice(order.total)}</span>
                  </div>
                </div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  );
}
