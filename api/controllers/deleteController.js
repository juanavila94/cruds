const { ObjectId } = require('bson');
const { getDb } = require('../db');

const deleteController = async (id) => {
 let db = getDb();


 const deleted = await db.collection('customers').deleteOne({_id: new ObjectId(id)})

     if(deleted){
          return (`Customer ${id} deleted successfully`)
     }else{
          return 'Can not delete, controller error'
     } 

}

module.exports = deleteController;