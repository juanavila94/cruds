const { getDb } = require('../db');


const getController = async () => {
     let db = getDb();
  
    const customers = await db.collection('customers').find().toArray();
     
     if (customers.length > 0) {
          return customers
     }else{
          return []
     }

}

module.exports = getController;