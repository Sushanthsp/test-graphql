import React from "react";
import { GET_COUNTRIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

/**
 * Countries is a component that fetches and displays a list of countries.
 */
const Countries = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data?.countries.slice(0, 4);

  return (
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
  );
};

export default Countries;
