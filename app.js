import express from 'express';
import recipesRouter from './routes/recipesRouter.js';
import galleryRouter from './routes/galleryRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();
//create an instance of express and where funciton is invoked
const app = express();
const port = 8000;



//this is express.js middleware parses in coming data
// sets end point for handling requests
app.use(cors());
app.use(express.json());
app.use('/recipes', recipesRouter);
app.use('/gallery', galleryRouter);


//define route for req and / is the root path
//then we fire handler function when get request
//and send response to client
app.get('/', (req, res) => {
    res.send('Hello Pasta Recipes');
});


//start server by calling listen
app.listen(port, () => {
   console.log(`Recipes app is running at http://localhost:${port}`) 
});



