import express from 'express';
import flashSaleControllers from '../controllers/flash-sale.controller';

const router = express.Router();

router.post('/flash-sales', flashSaleControllers.handleCreateFlashSale);

const flashSaleRoute = router;
export default flashSaleRoute;
