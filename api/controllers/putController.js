const { ObjectId } = require('bson');
const { getDb } = require('../db');

const putController = async (id, name, phoneNumber, email, hobbies) => {
let db = getDb();

const details = await db.collection('customers').updateOne({_id: new ObjectId(id)},{
          
    $set:{
     name,
     phoneNumber,
     email,
     hobbies,}
})

if (details){
return (`Costumer ${name} updated successfully`, details)
}else {
return (`Costumer ${name} event can't be updated due to controller's problems.`)
}


}

module.exports = putController;
