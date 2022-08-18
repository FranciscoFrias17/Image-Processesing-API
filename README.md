# Image Processesing API

An image resizing API using nodeJS and express

## Getting Started

    change directory to src folder and install dependencies.
    $ npm install
    $ npm start

## Running the API

The API is running on port 3000. You can access it by going to http://localhost:3000/api/images/

## Images

The images contained in the image folder are the following:

-   encenadaport.jpg
-   fjord.jpg
-   icelandwaterfall.jpg
-   palmtunnel.jpg
-   santamonica.jpg

## API Endpoints

The API has the following endpoints:

    * /api/images/ - returns an array of all images in the images folder
    * /api/images/:id - returns the image with the given id
    * /api/images/create/:id?width=:width&height=:height - resizes the named image with the given width and height

    example api paths:

    * http://localhost:3000/api/images/create/fjord?width=300&height=300 - will resize the image with the id fjord to 300x300

    * http://localhost:3000/api/images/icelandwaterfall.jpg - will return the image with the id icelandwaterfall.jpg
