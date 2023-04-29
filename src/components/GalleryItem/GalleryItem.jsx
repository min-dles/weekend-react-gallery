function GalleryItem(props) {
    const toggleDisplay = () => {
        console.log('Image was clicked!');
    }

    return (
        <li>
            <img 
                src={props.image.path} 
                onClick={toggleDisplay}
            />
            <p>image description: {props.image.description}</p>
        </li>
    )
}

export default GalleryItem;