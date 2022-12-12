import Head from "next/head";

import FACEBOOK_PIXEL_1 from "../facebook/pixel-1";

interface Props {
  name: string;
}

export default function Pixel({ name }: Props) {
  return <Head>{name === "FACEBOOK_PIXEL_1" && <FACEBOOK_PIXEL_1 />}</Head>;
}
