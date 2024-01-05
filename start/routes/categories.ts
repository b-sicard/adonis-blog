/*
|--------------------------------------------------------------------------
| Categories
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/categories', 'CategoryController.list')
    Route.get('/categories/:id', 'CategoryController.get')
    Route.post('/categories', 'CategoryController.create')
    Route.put('/categories/:id', 'CategoryController.update')
    Route.delete('/categories', 'CategoryController.delete')
}).middleware('auth')
