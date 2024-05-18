import express from 'express';
import productControllers from '../controllers/product.controller';

const router = express.Router();

router.post('/products', productControllers.handleCreateProduct);

router.get('/products', productControllers.handleGetProducts);

router.get('/products/:id', productControllers.handleGetProduct);

const productRoutes = router;
export default productRoutes;
