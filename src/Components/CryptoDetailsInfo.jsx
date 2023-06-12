import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CryptoDetailsInfo({ cryptoDetails }) {
  return (
    <>
      <h4>
        Name<img src={cryptoDetails.image} alt="logo"></img>
        {cryptoDetails.name}
      </h4>
      <hr></hr>
      <table
        border="1"
        class="table table-striped table-hover table-bordered border-primary table-sm"
      >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Year Established</td>
            <td>{cryptoDetails.year_established}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{cryptoDetails.country}</td>
          </tr>
          <tr>
            <td> Description</td>
            <td>
              {cryptoDetails.description ? cryptoDetails.description : "None"}
            </td>
          </tr>
          <tr>
            <td>URL</td>
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
          <tr>
            <td> Trade URL</td>
            <td>
              <a
                href={cryptoDetails.tickers[3].trade_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cryptoDetails.tickers[3].trade_url}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

// To put image and when clicked, will link to the particular link
