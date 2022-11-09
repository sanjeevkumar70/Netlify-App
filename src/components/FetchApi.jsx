import React, { useEffect, useState } from "react";
import './FetchApi.css'
const FetchApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://public.connectnow.org.uk/applicant-test/")
      .then((res) => res.json())
      .then((udata) => {
        console.log(udata);
        setData(udata);
      });
  }, []);
  return (
    <>
     {data.map((e)=>(
        <div className="card my-3">
        <div className="card-text">
          <h2>{e.name}</h2>
          <h3>{e.first_release_date}</h3>
          <p>{e.summary}</p>
        </div>
      </div>
     ))}
    </>
  );
};

export default FetchApi;
