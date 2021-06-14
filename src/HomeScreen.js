import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />

      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
