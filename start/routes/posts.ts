/*
|--------------------------------------------------------------------------
| Posts
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/posts', 'PostController.list')
Route.get('/posts/:id', 'PostController.get')
Route.post('/posts', 'PostController.create')
Route.put('/posts/:id', 'PostController.update')
Route.delete('/posts', 'PostController.delete')