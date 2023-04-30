-- PostgresSQL Database name: react_gallery

CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path VARCHAR(255) NOT NULL,
	description VARCHAR(120),
	likes INTEGER NOT NULL DEFAULT 0
);

INSERT INTO images
	(path, description, likes)
	VALUES
	('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
	('images/lola_small.jpg', 'Photo of a goat taken at Minnehaha Dog Park.', 1000000000),
	('images/squidward_art.jpg', 'Beautiful painting by Squidward Tentacles in abstract style.', 15),
	('images/bee_small.jpg', 'An adorable honeybee resting on a purple flower.', 1049),
	('/images/bee_closeup.jpg', 'A close-up of a honeybee resting on a yellow flower.', 37);