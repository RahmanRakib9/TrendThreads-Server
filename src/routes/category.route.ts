import express from 'express';
import categoryControllers from '../controllers/category.controller';

const router = express.Router();

router.post('/categories', categoryControllers.handleCreateCateroty);

router.get('/categories', categoryControllers.handleGetCategories);

const categoryRoutes = router;
export default categoryRoutes;
