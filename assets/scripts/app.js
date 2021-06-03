'use strict'

const events = require('./authScripts/events')

$(() => {
  // AUTHORIZATION PAGE
  $('#recipeView').hide()
  $('.navbar').hide()
  $('#firstLine').hide()
  $('#recipeCreate').hide()
  $('#recipeUpdate').hide()
  $('#recipeDelete').hide()
  $('#recipeList').hide()
  $('#changePass').hide()
  $('#backButton').hide()
  $('#passChangeButton').hide()
  $('#signOut').hide()
  $('footer').hide()
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)

  // AUTHROUTE CONTENT
  $('#signOut').on('click', events.onSignOut)
  $('#recipeCreate').on('submit', events.onCreateRecipe)
  $('#recipeView').on('click', events.onIndexRecipe)
  $('#recipeUpdate').on('submit', events.onUpdateRecipe)
  $('#recipeList').on('click', '.deleteButton', events.onDeleteRecipe)
  $('#changePass').on('submit', events.onChangePassword)

  // PASSWORD CHANGE BUTTON
  $('#passChangeButton').on('click', function () {
    $('#backButton').show()
    $('#changePass').show()
    $('#recipeView').hide()
    $('#recipeCreate').hide()
    $('#recipeUpdate').hide()
    $('#recipeDelete').hide()
    $('#recipeList').hide()
  })

  // UPDATE FORM BUTTON
  $('#recipeList').on('click', '.updateButton', function () {
    $('#recipeUpdate').show()
  })

  // BACK BUTTON
  $('#backButton').on('click', function (event) {
    $('#changePass').hide()
    $('#backButton').hide()
    $('#changePassword').hide()
    $('#signIn').trigger('reset')
    $('#signIn').hide()
    $('#signUp').hide()
    $('#signOut').show()
    $('#passChangeButton').show()
    $('#recipeView').show()
    $('#recipeCreate').show()
    $('#recipeDelete').show()
    $('footer').show()
    $('.navbar').show()
    $('#firstLineUnauth').hide()
    $('#firstLine').show()
    $('.authBoxHeader').hide()
    $('#recipeList').show()
    $('#changePass').trigger('reset')
  })
})
