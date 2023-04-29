import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList(props) {
// Needed to move key from GalleryItem component back here because 
// keys always go with .map!!
    return (
        <ul className="gallery-container">
            {
                props.gallery.map((image) => {
                    return (
                        <GalleryItem 
                            fetchImages={props.fetchImages}
                            image={image}
                            key={image.id}
                        />
                        // <li key={image.id}>
                        //     <img src={image.path} />
                        //     <p>image description: {image.description}</p>
                        // </li>
                    )
                })
            }
        </ul>
    )
}

export default GalleryList;