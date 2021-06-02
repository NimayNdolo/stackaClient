'use strict'

const events = require('./authScripts/events')

$(() => {
  // AUTHORIZATION PAGE
  $('#recipeView').hide()
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
    $(this).data('clicked', true)
    // const recipe = responseData.recipe
    // let updateForm = ''
    // recipe.forEach(recipe => {
    //   updateForm += `
    //       <form id="recipeUpdate">
    //         <input class="updateId" name="recipe[id]" type="text" placeholder="recipe ID" required>
    //           <br>
    //           <br>
    //         <input class="updateTitle" name="recipe[title]" type="text" placeholder="recipe title">
    //           <br>
    //           <br>
    //         <input class="updateLink" name="recipe[link]" type="text" placeholder="recipe link">
    //           <br>
    //           <br>
    //         <button id="editRec">update</button>
    //       </form>
    //     `
    // })
    // $('#recipeList').html(updateForm)
  })

  // BACK BUTTON
  $('#backButton').on('click', function (event) {
    event.preventDefault()
    window.history.back()
  })
})
