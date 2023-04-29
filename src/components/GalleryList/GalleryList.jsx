import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {

    return (
        <ul>
            {
                props.gallery.map((image) => {
                    return (
                        <GalleryItem image={image}/>
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