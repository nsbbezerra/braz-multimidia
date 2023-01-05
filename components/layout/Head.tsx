import Head from "next/head";

import FACEBOOK_PIXEL_1 from "../../facebook/pixel-1";
import FACEBOOK_PIXEL_2 from "../../facebook/pixel-2";

interface Props {
  title: string;
}

export default function HeadApp({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/img/icone.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Uniformes para todos os segmentos, uniformes esportivos, para academia, para formandos, para eventos, para empresas, abadás para festas, máscadas e muito mais"
      />
      <meta
        name="keywords"
        content="uniformes, abadá, uniforme, esportivo, esportivos, academia, formandos, eventos, máscara, empresas, serigrafia, malha"
      />
      <meta name="robots" content="index,nofollow" />
      <meta name="author" content="Natanael Bezerra - NK Informática" />
      <meta name="googletboot" content="index,nofollow" />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta content="Global" name="distribution" />
      <meta
        name="google-site-verification"
        content="ONO9UDSfHSU6yquNIFhFnjmgOGv7nj3iZZ50mRLjrhM"
      />
      <FACEBOOK_PIXEL_1 />
      <FACEBOOK_PIXEL_2 />
    </Head>
  );
}
