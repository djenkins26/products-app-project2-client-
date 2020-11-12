'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const productEvents = require('./products/events')


$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#create-product').hide()
  $('#index-product').hide()
  $('#create-product').on('submit', productEvents.onCreateProduct)
  $('#index-product').on('click', productEvents.onIndexProduct)
  $('#update-product').on('submit', productEvents.onUpdateProduct)
  $('#update-product').hide()
  $('#delete-product').on('submit', productEvents.onDeleteProduct)
  $('#delete-product').hide()
})
