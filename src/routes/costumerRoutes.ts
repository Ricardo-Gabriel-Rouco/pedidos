import express from 'express'
import { updateCostumer, createCostumer, deleteCostume } from "../Repositories/CostumerRepository";
import { getCostumers } from '../handlers/costumerHandlers'
const server = express.Router() 

server.get('/:idOrName?', getCostumers)

server.put('/costumer/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;

  try {
    const updatedCostumer = await updateCostumer(id, newData);
    res.json(updatedCostumer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

server.post('/costumer', async(req, res) =>{
  try {
    const result = await createCostumer(req.body)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
})

server.delete('/costumer/:id', async(req, res) =>{
  try {
    await deleteCostume(+req.params.id)
    res.status(200).send('Costumer deleted')
  } catch (error) {
    res.status(400).send('Costumer not found')
  }
})


export default server