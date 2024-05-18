import express from 'express';
import productControllers from '../controllers/product.controller';

const router = express.Router();

router.post('/products', productControllers.handleCreateProduct);

const productRoutes = router;
export default productRoutes;
