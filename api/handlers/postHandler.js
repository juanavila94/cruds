const postController = require("../controllers/postController");



const postHandler = async (req, res) => {
     const { name, phoneNumber, email, hobbies } = req.body;


     try {
          const results = await postController( name, phoneNumber, email, hobbies )
          return res.status(200).json(results);
     } catch (error) {
          return res.status(400).json({error : error.message});
     }
}

module.exports = postHandler