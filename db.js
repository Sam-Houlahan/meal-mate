module.export = {
  addUser,
  getUsers

}

function getUsers (connection) {
  return connection('users').select()
}

function addUser (connection, email, password) {
  return connection('users').insert({email: email, password: password})
}
