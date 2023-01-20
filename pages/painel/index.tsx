import { Fingerprint, SignIn } from "phosphor-react";
import { Fragment } from "react";
import Button from "../../components/layout/Button";
import HeadApp from "../../components/layout/Head";

export default function Login() {
  return (
    <Fragment>
      <HeadApp title="Painel | Braz Multimídia" />
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
            />

            <input
              id="password"
              className="border h-10 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-marinho-500 w-full"
              placeholder="Senha"
              type={"password"}
            />

            <Button isFullSize buttonSize="lg">
              <SignIn />
              Login
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
