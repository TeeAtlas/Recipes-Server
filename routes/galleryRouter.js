import express from 'express';
import { getAllGalleryItems, getGalleryItem } from '../controllers/galleryController.js';

const galleryRouter = express.Router();

galleryRouter.get('/', getAllGalleryItems);
galleryRouter.get('/:id', getGalleryItem);

export default galleryRouter;