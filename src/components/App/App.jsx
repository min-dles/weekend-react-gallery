import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    axios({
      method: 'GET',
      url:'/gallery'
    }).then((response) => {
      const theImages = response.data;
      setGallery(theImages);
    }).catch((error) => {
      console.log('error in axios GET', error);
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList gallery={gallery}/>
        {/* <p>Gallery goes here</p> */}
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/lola_small.jpg"/> */}
      </div>
    );
}

export default App;
