const getFormFields = require('./../../../lib/get-form-fields')

const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onCreateProduct = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createProduct(data)
    .then(ui.createProductSuccess)
    .catch(ui.createProductFailure)
}

const onIndexProduct = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.indexProduct(data)
    .then(ui.indexProductSuccess)
    .catch(ui.indexProductFailure)
}

const onUpdateProduct = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.updateProduct(data)
    .then(ui.updateProductSuccess)
    .catch(ui.updateProductFailure)
}

const onDeleteProduct = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.deleteProduct(data)
    .then(ui.deleteProductSuccess)
    .catch(ui.deleteProductFailure)
}


module.exports = {
  onCreateProduct,
  onIndexProduct,
  onUpdateProduct,
  onDeleteProduct
}
