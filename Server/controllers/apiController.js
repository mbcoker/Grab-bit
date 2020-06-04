require('dotenv').config();
const axios = require('axios');
const apiController = {};

apiController.getItem = async (req, res, next) => {
  const { barcode } = req.params;
  try {
    
    const url = `
    https://api.barcodelookup.com/v2/products?barcode=${barcode}&formatted=y&key=${process.env.BARCODE_KEY}`;
    
    const response = await axios.get(url);
    
    res.locals.item = response.data;
    
    return next();

  } catch (error) {
    console.log(error);
  }
};



module.exports = apiController;
