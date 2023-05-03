const putController = require("../controllers/putController");



const putHandler = async (req, res) => {
     const { name, phoneNumber, email, hobbies } = req.body;
     const { id } = req.params;

     try {
          const results = await putController( id, name, phoneNumber, email, hobbies )
          return res.status(200).json(results);
     } catch (error) {
          return res.status(400).json({error : error.message});
     }
}

module.exports = putHandler