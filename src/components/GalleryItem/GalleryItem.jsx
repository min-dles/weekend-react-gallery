import React, { useState } from 'react';
import './GalleryItem.css';
import axios from 'axios';

function GalleryItem(props) {
    // I want image to be displayed first- so setting state to true:
    const [displayImage, setDisplayImage] = useState(true);

    // going to toggle image and description here:
    const toggleDisplay = () => {
        // console.log('Image was clicked!');
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
                <p>image description: {props.image.description}</p>
            )
        }
    }

    // axios fetch can go HERE for the ID PUT manipulation for likes!!!
    const updateLikes = () => {

        console.log('In updateLikes function for GalleryItem component.');
        axios({
          method: 'PUT',
          url: `/gallery/like/${props.image.id}`
        }).then((response) => {
          const likes = response.data;
          console.log('Axios fetch for Likes status:', likes);
          props.fetchImages();
        }).catch((error) => {
          console.log('error in axios PUT:', error);
        })
      }

    return (
        <li className="gallery-item">
            {/* TEST: displayImage is {displayImage ? "true" : "false"} */}
            <div className="display-box" onClick={toggleDisplay}>
                <ImageOrDescription />
            </div>
            <p>LIKES: {props.image.likes}</p>
            <button onClick={updateLikes}>Like ❤️‍🔥 Pic</button>
        </li>
    )
}

export default GalleryItem;