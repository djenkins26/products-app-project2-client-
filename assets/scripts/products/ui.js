const store = require('./../store')

const createProductSuccess = function (response) {

  $('#message').text('Your product is added')
}

const createProductFailure = function (error) {
  $('#message').text('Add product failed, try again')
}

const indexProductSuccess = function (res) {
// res is an object with key of products and products is an array of product objects
  const products = res.products
  // empty the div with HTML empty string
  $('#product-display').html('')

  products.forEach(function (currentProduct) {
    const productHTML = (`
      <h4>Name: ${currentProduct.name}</h4>
      <p>Text: ${currentProduct.text}</p>
      <p>ID: ${currentProduct._id}</p>
      <br>
      `)

    $('#product-display').append(productHTML)
  })
}

const indexProductFailure = function (error) {
  $('#message').text('All products failed, try again')
}

const updateProductSuccess = function (data) {
  $('#update-product-message').html('You successfully made changes to this product')

  $('#product-display').html('Click "See all products in store" again to see changes')

  $('#update-product-message').addClass('success')

  setTimeout(() => {
    $('#update-product-message').html('')
    $('#update-product-message').removeClass('success')
  }, 5000)

  $('#update-product').trigger('reset')
}

const updateProductFailure = function (error) {
  $('#message').text('Update product failed, try again')
  $('#update-product').trigger('reset')
}

const deleteProductSuccess = function (response) {
  $('#delete-product-message').html('Product successfully deleted')

  $('#product-display').html('Click "See all products in store" again to see changes')

  $('#delete-product-message').addClass('success')

  setTimeout(() => {
    $('#delete-product-message').html('')
    $('#delete-product-message').removeClass('success')
  }, 5000)
  $('#delete-product').trigger('reset')
}

const deleteProductFailure = function (error) {
  $('#message').text('Delete this product failed, try again')
}

module.exports = {
  createProductSuccess,
  createProductFailure,
  indexProductSuccess,
  indexProductFailure,
  updateProductSuccess,
  updateProductFailure,
  deleteProductSuccess,
  deleteProductFailure
}
