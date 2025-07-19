
import httpstatus from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync';
import { MangoService } from './mango.service';
import { sendResponse } from '../../utils/sendResponse';
import { Request, Response } from 'express';

const createMango = catchAsync(async (req: Request, res: Response) => {
   const payload = req.body;
   const result = await MangoService.createMangoIntoDB(payload)

   sendResponse(res, {
      statusCode: httpstatus.CREATED,
      success: true,
      message: "Mango Created Successfully",
      data: result
   })

})

export const MangoController = {
   createMango
}