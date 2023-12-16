import express from 'express'
import { createNewCostumer, deleteCostumerById, getCostumers, updateCostumerById } from "./controller/costumer.controller";
const routerCostumer = express.Router() 

// input
routerCostumer.post('/', createNewCostumer)
routerCostumer.put('/:id', updateCostumerById)
routerCostumer.delete('/:id', deleteCostumerById)

// output
routerCostumer.get('/:idOrName?', getCostumers)

export default routerCostumer