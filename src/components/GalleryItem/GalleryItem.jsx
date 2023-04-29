import {useState} from 'react';

function GalleryItem(props) {
    // I want image to be displayed first- so setting state to true:
    const [displayImage, setDisplayImage] = useState(true);

    // going to toggle image and description here:
    const toggleDisplay = () => {
        console.log('Image was clicked!');
        if (displayImage) {
                setDisplayImage(false)
            } else {
                    setDisplayImage(true)
                }
    }

    return (
        <li>
            TEST: displayImage is {displayImage ? "true" : "false"}
            <img 
                src={props.image.path} 
                onClick={toggleDisplay}
            />
            <p>image description: {props.image.description}</p>
        </li>
    )
}

export default GalleryItem;