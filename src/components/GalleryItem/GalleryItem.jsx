import { useState } from 'react';
import './GalleryItem.css'

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

    return (
        <li>
            {/* TEST: displayImage is {displayImage ? "true" : "false"} */}
            <div className="display-box" onClick={toggleDisplay}>
                <ImageOrDescription />
            </div>
            <p>LIKES: {props.image.likes}</p>
            <button>Like Pic!✨</button>
        </li>
    )
}

export default GalleryItem;