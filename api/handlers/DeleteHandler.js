const deleteController = require("../controllers/deleteController");

const deleteHandler = async (req, res) => {
     const { id } = req.params;

try {
     const deleted = await deleteController(id);
     return res.status(200).json(deleted);
} catch (error) {
     return res.status(400).json({error: error.message});
}     
};

module.exports = deleteHandler;