/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/users', 'UserController.create')
}).middleware('auth')
