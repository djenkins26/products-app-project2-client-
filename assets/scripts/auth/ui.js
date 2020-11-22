'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('You are now signed up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#message').text('You are now signed in ' + response.user.email)
  $('#sign-in-form').trigger('reset')

  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#create-product').show()
  $('#index-product').show()
  $('#update-product').show()
  $('#delete-product').show()
  $('h1').show()
  $('h4').hide()
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed, try again')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password successfully')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Changed password failed, try again')
}

const signOutSuccess = function () {
  $('#message').text('You are now signed out')
  $('#sign-out-form').trigger('reset')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#create-product').hide()
  $('#index-product').hide()
  $('#product-display').hide()
  $('#update-product').hide()
  $('#delete-product').hide()
  $('h1').show()
  $('h4').show()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
