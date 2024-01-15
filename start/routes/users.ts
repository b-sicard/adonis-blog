/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/users/:id', 'UserController.get')
    Route.post('/users', 'UserController.create')
}).middleware('auth')
