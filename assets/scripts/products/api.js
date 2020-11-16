const store = require('./../store')
const config = require('./../config')

const createProduct = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const indexProduct = function () {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateProduct = function (data) {
  return $.ajax({
    url: config.apiUrl + '/products/' + data.product.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteProduct = function (data) {
  return $.ajax({
    url: config.apiUrl + '/products/' + data.product.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createProduct,
  indexProduct,
  updateProduct,
  deleteProduct
}
