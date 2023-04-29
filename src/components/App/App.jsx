import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  const [gallery, setGallery] = useState([]);
  const [likeCount, setLikes] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  useEffect(() => {
    updateLikes(likeCount + 1);
  }, [])

  const fetchImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      const theImages = response.data;
      setGallery(theImages);
    }).catch((error) => {
      console.log('error in axios GET', error);
    })
  }

  const updateLikes = () => {
    axios({
      method: 'PUT',
      url: '/gallery/like/:id'
    }).then((response) => {
      const likes = response.data;
      console.log('Axios fetch for Likes status:', likes);
      setLikes(likes);
    }).catch((error) => {
      console.log('error in axios PUT:', error);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        gallery={gallery}
        likeCount={likeCount}
        updateLikes={updateLikes}
      />
      {/* <p>Gallery goes here</p> */}
      {/* <img src="images/goat_small.jpg"/>
        <img src="images/lola_small.jpg"/> */}
    </div>
  );
}

export default App;
