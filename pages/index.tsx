import type { NextPage } from "next";
import { Fragment } from "react";
import HeadApp from "../components/layout/Head";
import Header from "../components/layout/Header";
import Panel from "../components/layout/Panel";

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeadApp
        title="Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
        Promocional, Abadás"
      />
      <Header />
      <Panel />
    </Fragment>
  );
};

export default Home;
