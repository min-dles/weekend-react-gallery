const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
// STRETCH: importing DB instead of server data
const pool = require('../modules/pool.js');

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params.id);
    const sqlText = `
        UPDATE images
            SET "likes"=$1
            WHERE "id"=$2;
    `;

    const galleryId = req.params.id;
    const galleryItems = req.params;
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
        const sqlValues = [galleryItem.likes, galleryId];
        
        pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            console.log('DB updated likes!', dbRes);
            res.sendStatus(200);
        }).catch((dbErr) => {
            console.log('Error updating DB likes', dbErr);
            res.sendStatus(500);
        })
    }
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM images
            ORDER BY id;
    `;

    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('GET /gallery fail:', err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;