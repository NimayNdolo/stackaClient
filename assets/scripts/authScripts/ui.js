const store = require('./../store')

// AUTHORIZATION ACTIONS

const onSignUpSuccess = function () {
  $('#signUpMessage').text('Account created! Sign in.')

  setTimeout(() =>
    $('#signUpMessage').text('')
  , 3000)

  $('#signUp').trigger('reset')
  $('#changePassword').hide()
}

const onSignInSuccess = function (responseData) {
  $('#signInMessage').text('Signed In! Create a list!')

  setTimeout(() =>
    $('#signInMessage').text('')
  , 3000)

  store.user = responseData.user
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
  $('#signOut').show()
  $('#passChangeButton').show()
  $('#recipeView').show()
  $('#recipeCreate').show()
  $('#recipeDelete').show()
  $('footer').show()
}

const onSignOutSuccess = function () {
  $('#signOutMessage').text('Signed out!')

  setTimeout(() =>
    $('#signOutMessage').text('')
  , 3000)

  $('#signOut').hide()
  $('form').trigger('reset')
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
  $('#signUp').show()
  $('#signIn').show()
}

const onChangePasswordSuccess = function () {
  $('#changePass').trigger('reset')
  $('#changePassMessage').text('Your password has been changed!')

  setTimeout(() =>
    $('#changePassMessage').text('')
  , 3000)

  $('#backButton').show()
  $('#changePassword').hide()
}

// RECIPE CRUD ACTIONS

const onIndexRecipeSuccess = function (responseData) {
  $('#recipeList').show()
  const recipe = responseData.recipe
  let recipeHtml = ''
  let updateHtml = ''
  recipe.forEach(recipe => {
    recipeHtml += `
      <div id="recipeWindow">
          <h4>${recipe.title}</h4>
          <p>${recipe.link}</p>
          <p>ID: ${recipe._id}</p>
            <br>
          <button class='deleteButton' data-id= ${recipe._id}>Delete</button>
          <button class='updateButton' data-id= ${recipe._id}>Edit</button>
      </div>
      `
    updateHtml += `
    <form id="recipeUpdate">
        <input class="updateId" name="recipe[id]" type="text" placeholder="recipe ID" required>
          <br>
          <br>
        <input class="updateTitle" name="recipe[title]" type="text" placeholder="recipe title">
          <br>
          <br>
        <input class="updateLink" name="recipe[link]" type="text" placeholder="recipe link">
          <br>
          <br>
        <button id="editRec">update</button>
    </form>
    `
  })
  if (recipeHtml === '') {
    // $('.error-message').text('No items yet. Add to your list!')
    recipeHtml = 'No items yet. Add to your recipe book!'

    setTimeout(() =>
      $('#errorMessage').text('')
    , 3000)
  }

  $('#recipeList').html(recipeHtml)
}

const onCreateRecipeSuccess = function () {
  $('#recipeCreate').trigger('reset')
  $('#recipeCreateMessage').text('Added! Click, "My Recipe book," to see your recipe!')

  setTimeout(() =>
    $('#recipeCreateMessage').text('')
  , 3000)
}

const onUpdateRecipeSuccess = function () {
  $('#recipeUpdate').trigger('reset')
  $('#recipeUpdateMessage').text('Updated! Click, "My Recipe book," to see change.')

  setTimeout(() =>
    $('#recipeUpdateMessage').text('')
  , 5000)

  $('#recipeUpdate').hide()
  $('#recipeList').reload()
}

const onDeleteRecipeSuccess = function () {
  $('#recipeDeleteMessage').text('Deleted! Click, "My Recipe book," to see change.')

  setTimeout(() =>
    $('#recipeDeleteMessage').text('')
  , 5000)
}

// ERROR ACTIONS

const onError = function () {
  $('#errorMessage').text('Error. Please try again.')

  setTimeout(() =>
    $('#errorMessage').text('')
  , 3000)

  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onIndexRecipeSuccess,
  onDeleteRecipeSuccess,
  onUpdateRecipeSuccess,
  onCreateRecipeSuccess,
  onError
}