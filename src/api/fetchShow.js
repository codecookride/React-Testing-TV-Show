import React from "react";
import axios from "axios";


// const fetchShow = () => {
//     axios
//       .get(
//         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//       )
//       .then(res => {
//         setShow(res.data);
//         setSeasons(formatSeasons(res.data._embedded.episodes));
//       });
//   };
//   fetchShow();


  export const fetchShow = () => {
   
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          return res;
        }) // or res.data, however you want to set that up
        .catch(err => {
          console.error("error fetching data from api, err: ", err.message);
          return err;
        });
  }