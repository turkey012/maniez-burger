import Head from "next/head";
import BurgerCustomizer from "../components/BurgerCustomizer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maniez Burger</title>
      </Head>
      <BurgerCustomizer />
    </>
  );
}
