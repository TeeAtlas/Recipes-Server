import express from 'express';
import { getGalleryItem } from '../controllers/galleryController.js';

const galleryRouter = express.Router();

galleryRouter.get('/:id', getGalleryItem);

export default galleryRouter;