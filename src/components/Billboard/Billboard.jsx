import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import YouTube from 'react-youtube';
import styles from './Billboard.module.css';
import close from './close.png';

const Billboard = () => {
  const [movie, setMovie] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      let currentMovie = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
      while (!currentMovie.backdrop_path) {
        currentMovie = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
      }

      setMovie(currentMovie);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const handleClick = movie => {
    const name = movie.name ? movie.name : movie.title;

    axios
      .get(requests.fetchTrailers, {
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        params: {
          q: `${name} trailer`,
          maxResults: 1,
        },
      })
      .then(res => {
        setTrailerURL(res.data.items[0].id.videoId);
      });
  };

  const handleClose = () => {
    setTrailerURL('');
  };
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className={styles.container}>
      <header
        className={styles.header}
        onClick={() => setTrailerURL('')}
        style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}
      >
        <div className={styles.contents}>
          <h1 className={styles.title}>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className={styles.buttonGroup}>
            <button onClick={() => handleClick(movie)} className={styles.button}>
              Play
            </button>
            <button className={styles.button}>My List</button>
          </div>
          <h1 className={styles.description}>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className={styles.fadeBottom} />
      </header>
      <div className={styles.player}>
        {trailerURL && (
          <button className={styles.exit} onClick={() => handleClose()}>
            <img className={styles.exitImg} src={close} />
          </button>
        )}
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      </div>
    </div>
  );
};

export default Billboard;
