'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('You are now signed up')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#message').text('You are now signed in')

  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed, try again')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Change password successfully')
}

const onChangePasswordFailure = function () {
  $('#message').text('Changed password failed, try again')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully')
  store.user = null
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure

}
