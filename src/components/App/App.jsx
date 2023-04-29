import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    axios({
      method: 'GET',
      url:'/gallery'
    }).then((response) => {
      const theImages = response.data;
      console.log('response and Imgs:', response, theImages);
    }).catch((error) => {
      console.log('error in axios GET', error);
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList />
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/lola_small.jpg"/> */}
      </div>
    );
}

export default App;
