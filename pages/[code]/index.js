"use client"
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../../graphql/queries";
import styles from "../../styles/CountryPage.module.scss";

export default function CountryPage() {
    const router = useRouter();
    const { code } = router.query;
  
    const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
      variables: { code },
    });
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    const countryName = data?.country?.name;
  
    return (
      <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Country Page: {code}</h1>
        {countryName && <p className={styles.para}>Country Name: {countryName}</p>}
      </div>
    </div>
    
    );
  }