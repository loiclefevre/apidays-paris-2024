import axios from 'axios';

function ORDS() {}

ORDS.prototype.getSchema = async function() {
  return await axios.get(' http://localhost/ords/apidays/schema_repository/products', {})
    .then( res => res.data.schema )
    .catch(err => err);
}


ORDS.prototype.insertNewProduct = async function(productJSON) {
  return await axios.post(' http://localhost/ords/apidays/schema_repository/products', productJSON)
    .then( res => res )
    .catch(err => err);
}

export default new ORDS();
