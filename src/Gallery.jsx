import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";
const url =
  "https://api.unsplash.com/search/photos?client_id=rXqHKApjIUc-ReXrPTIzw5Qb7rydqWO9FTSxCFmgBWw";

const Gallery = () => {
  const {searchThem} = useGlobalContext()
  const responce = useQuery({
    queryKey: ["images",searchThem ],
    queryFn: async () => {
      const resApi = await axios.get(`${url}&query=${searchThem}`);
      // console.log("resApi : ", resApi.data);

      return resApi.data;
    },
  });
  console.log("responce : ", responce);
  if (responce.isLoading) {
    return (
      <section className="image-container">
        <h4 style={{ color: "red" }}>Loading...</h4>
      </section>
    );
  }

  if (responce.error) {
    return (
      <section className="image-container">
        <h4 style={{ color: "red" }}>There was Error..</h4>
      </section>
    );
  }

  const results = responce.data.results;
  console.log("results : ", results);
  // console.log("responce17 : ", responce);
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4 style={{ color: "red" }}>No ruselt found..</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((items) => {
        console.log("items : ", items);
        const URL = items?.urls?.regular;
        return (
          <img
            className="img"
            src={URL}
            alt={items.alt_description}
            key={items.id}
          />
        );
      })}
    </section>
  );

};

export default Gallery;
