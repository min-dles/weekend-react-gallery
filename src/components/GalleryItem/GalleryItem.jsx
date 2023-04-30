import React, { useState } from 'react';
import './GalleryItem.css';
import axios from 'axios';

function GalleryItem(props) {
    // I want image to be displayed first- so setting state to true:
    const [displayImage, setDisplayImage] = useState(true);

    // going to toggle image and description here:
    const toggleDisplay = () => {
        if (displayImage) {
            setDisplayImage(false)
        } else {
            setDisplayImage(true)
        }
    }

    // make a component to change out the HTML: 
    const ImageOrDescription = () => {
        if (displayImage) {
            return (
                <img src={props.image.path}/>
            )
        } else {
            return (
                <p>{props.image.description}</p>
            )
        }
    }

    // axios fetch can go HERE for the ID PUT manipulation for likes!!!
    const updateLikes = () => {
        axios({
          method: 'PUT',
          url: `/gallery/like/${props.image.id}`
        }).then((response) => {
          props.fetchImages();
        }).catch((error) => {
          console.log('error in axios PUT:', error);
        })
      }

    return (
        <li className="gallery-item">
            <div className="display-box" onClick={toggleDisplay}>
                <ImageOrDescription />
            </div>
            <p>LIKES: {props.image.likes}</p>
            <button onClick={updateLikes}>Like ❤️‍🔥 Pic</button>
        </li>
    )
}

export default GalleryItem;