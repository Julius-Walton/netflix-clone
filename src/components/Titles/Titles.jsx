import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import YouTube from 'react-youtube';
import close from './close.png';

import styles from './Titles.module.css';
import { wait } from '@testing-library/user-event/dist/utils';
function Titles({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

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
      })
      .then(wait(100));
  };

  const handleClose = () => {
    setTrailerURL('');
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.posters}>
        {movies?.map(movie => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={styles.poster}
              src={`${requests.baseURL}${movie?.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
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
}

export default Titles;
