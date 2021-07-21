import React from 'react';
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
    const { state, loading, error } = useHomeFetch()
    console.log(state);
    return (
        <div>
            Home Page
        </div>
    );
}
export default Home;
