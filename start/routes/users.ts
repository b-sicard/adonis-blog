/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UserController.create')

Route.group(() => {
    Route.get('/users/:id', 'UserController.get')
}).middleware('auth')
