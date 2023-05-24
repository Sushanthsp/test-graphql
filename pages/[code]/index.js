"use client"
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "@/graphql/queries";

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
      <div>
        <h1>Country Page: {code}</h1>
        {countryName && <p>Country Name: {countryName}</p>}
      </div>
    );
  }