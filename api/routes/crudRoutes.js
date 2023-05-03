const customerRouter = require('express').Router()
const deleteHandler = require('../handlers/DeleteHandler')
const getHandler = require('../handlers/getHandler')
const putHandler = require('../handlers/putHandler')
const postHandler = require('../handlers/postHandler')




customerRouter.get('/', getHandler)
customerRouter.post('/', postHandler)
customerRouter.put('/:id', putHandler)
customerRouter.delete('/:id',deleteHandler)

module.exports = customerRouter;