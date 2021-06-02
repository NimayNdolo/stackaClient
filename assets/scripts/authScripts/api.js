const config = require('../config')
const store = require('../store')

// USER AUTH

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// USER ELEMENTS

const showRecipe = function (id, title) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/show' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: title
  })
}

const indexRecipe = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createRecipe = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes/',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateRecipe = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipes/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteRecipe = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  showRecipe,
  createRecipe,
  indexRecipe,
  updateRecipe,
  deleteRecipe
}
