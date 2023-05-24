import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import client from "../../api/apollo-client";
import { GET_COUNTRIES } from "../graphql/queries";
import Link from "next/link";

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Server side rendering
        </h1>

        <div className={styles.grid}>
          {countries.map((country) => (
            <Link href={`/${country.code}`} key={country.code}>
            <div key={country.code} className={styles.card}>
                <h3>{country.name}</h3>
                <p>
                  {country.code} - {country.emoji}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_COUNTRIES });

  return {
    props: {
      countries: data.countries.slice(0, 20),
    },
  };
}