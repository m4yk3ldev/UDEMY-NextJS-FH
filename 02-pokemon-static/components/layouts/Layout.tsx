import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Navbar from "../UI/Navbar";

interface Props {
  title?: string;
}
const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon API"}</title>
        <meta name="author" content="Maykel" />
        <meta name="description" content="Information Pokemon app" />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;

