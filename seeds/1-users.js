exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({email: 'aardvark@example.org', password: 'fuck'}),
        knex('users').insert({email: 'baboon@example.org', password: 'fuck'}),
        knex('users').insert({email: 'capybara@example.org', password: 'fuck'})

      ])
    })
}
