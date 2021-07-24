import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';
import HeroImage from './HeroImage';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </>
  );
};
export default Home;
