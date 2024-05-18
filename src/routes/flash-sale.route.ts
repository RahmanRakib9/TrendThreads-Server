import express from 'express';
import flashSaleControllers from '../controllers/flash-sale.controller';

const router = express.Router();

router.post('/flash-sales', flashSaleControllers.handleCreateFlashSale);

router.get('/flash-sales', flashSaleControllers.handleGetFlashSales);

const flashSaleRoute = router;
export default flashSaleRoute;
