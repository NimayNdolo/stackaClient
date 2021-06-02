const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// USER RELATED EVENTS

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

// AUTH EVENTS

const onIndexRecipe = function (event) {
  event.preventDefault()
  api.indexRecipe()
    .then(ui.onIndexRecipeSuccess)
    .catch(ui.onError)
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createRecipe(formData)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onError)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRecipe(id)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onError)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.recipe.id
  api.updateRecipe(id, formData)
    .then(ui.onUpdateRecipeSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onIndexRecipe,
  onChangePassword,
  onDeleteRecipe,
  onUpdateRecipe,
  onCreateRecipe
}
