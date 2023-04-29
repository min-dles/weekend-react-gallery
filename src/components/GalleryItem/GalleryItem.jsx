function GalleryItem(props) {
    return (
        <li key={props.image.id}>
            <img src={props.image.path} />
            <p>image description: {props.image.description}</p>
        </li>
    )
}

export default GalleryItem;