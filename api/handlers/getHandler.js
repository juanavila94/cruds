const getController = require('../controllers/getController')

const getHandler =  async (req, res) => {

     try {
          const results = await getController();
          return res.status(200).json(results);
     } catch (error) {
          res.status(500).json({error: error.message})
          
     }
}

module.exports = getHandler;