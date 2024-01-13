import express from 'express'
import catchedAsync from '../../utils/catchedAsync';
import userExtractor from '../../middlewares/userExtractor';
import { createNewCostumer, deleteCostumerById, getCostumers, updateCostumerById } from "./controller/costumer.controller";
const routerCostumer = express.Router() 

// input
routerCostumer.post('/', userExtractor,catchedAsync(createNewCostumer))
routerCostumer.put('/:id', userExtractor, catchedAsync(updateCostumerById))
routerCostumer.delete('/:id', userExtractor, catchedAsync(deleteCostumerById))

// output
routerCostumer.get('/:idOrName?', catchedAsync(getCostumers))

export default routerCostumer