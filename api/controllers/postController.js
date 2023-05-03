const { getDb } = require('../db');

const postController = async (name, phoneNumber, email, hobbies) => {
    let db = getDb();
     
     if (!name || !phoneNumber || !email || !hobbies){
          throw new Error('No input data');
     }
  const details = await db.collection('customers').insertOne({
          
                 name,
                 phoneNumber,
                 email,
                 hobbies,

  })
   
  if (details){
     return (`Costumer ${name} created successfully`)
  }else {
     return (`Costumer ${name} event can't be created due to controller's problems.`)
  }


}

module.exports = postController;