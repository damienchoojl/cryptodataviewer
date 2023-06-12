import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CryptoDetailsInfo({ cryptoDetails }) {
  return (
    <>
      <h4>
        Name: <img src={cryptoDetails.image} alt="logo"></img>
        {cryptoDetails.name}
      </h4>
      <table border="1"></table>
      <hr></hr>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          Year Established:<td>{cryptoDetails.year_established}</td>
        </tr>
        <tr>
          Country:<td>{cryptoDetails.country}</td>
        </tr>
        <tr>
          Description:
          <td>
            {cryptoDetails.description ? cryptoDetails.description : "None"}
          </td>
        </tr>
        <tr>
          URL:
          <td>
            <a
              href={cryptoDetails.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cryptoDetails.url}
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

// To put image and when clicked, will link to the particular link
