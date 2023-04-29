function GalleryList(props) {

    return (
        <ul>
            {
                props.gallery.map((image) => {
                    return (
                        <li key={image.id}>Here is image desc: {image.description}</li>
                    )
                })
            }
        </ul>
    )
}

export default GalleryList;