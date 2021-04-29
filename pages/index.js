import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BingeFlix</title>
        <link rel="icon" href="/bingeflix-icon.jpeg" />
      </Head>

      {/* Header */}
      <Header />
      <Nav />
      {/* Body */}
    </div>
  );
}
