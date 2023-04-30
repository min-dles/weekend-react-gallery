# React Image Gallery

Technologies being used include: 
- React
- HTML
- CSS
- Javascript 
- SQL

## Description

Base Mode of this project is to build an image gallery that passes the data from server to client through Props in React. 

### Task List
- ✅ Use `axios ` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.
- ✅ Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    - ✅ Iterate (loop over) the list of gallery data
    - ✅ Make GalleryItems
- ✅ Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
    - ✅ Update the `GalleryList` to use this component to display an image.
    - ✅ Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    - ✅ Display the number of likes for each item and include a like button.
    - ✅ When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - ✅ Update the gallery each time a like button is clicked.

### STRETCH GOALS
- Move the data into a database (postgresql)
    - name your database `react_gallery`
    - include a `database.sql` file documenting your database tables
- Add a form (new **component**) that allows a user to POST a new gallery item
    - Client side form (use absolute URL for images)
    - Server side route for posting an image
- Ability to delete a gallery item
- Add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)
- Use [multer](https://github.com/expressjs/multer) for image upload 