function GalleryList(props) {

    return (
        <ul>
            {
                props.gallery.map((image) => {
                    return (
                        <li key={image.id}>
                            <img src={image.path} />
                            <p>image description: {image.description}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default GalleryList;