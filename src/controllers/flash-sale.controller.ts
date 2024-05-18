import { NextFunction, Request, Response } from "express";
import flashSaleServices from "../services/flash-sale.service";

async function handleCreateFlashSale(req: Request, res: Response, next: NextFunction) {
    try {
        const { title, img, price } = req.body;
        const flashSale = await flashSaleServices.createNewFlashSale(title, img, price);

        res.status(201).json({
            message: "Flash Sale Created Successfully!",
            payload: [flashSale]
        })

    } catch (error) {
        next(error)
    }
}

const flashSaleControllers = {
    handleCreateFlashSale
}
export default flashSaleControllers