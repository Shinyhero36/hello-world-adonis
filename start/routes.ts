/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from '../app/Models/User'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/login', 'AuthController.showLoginForm')
Route.post('/login', 'AuthController.login').as('login')

Route.get('/register', 'AuthController.showRegisterForm')
Route.post('/register', 'AuthController.register').as('register')

Route.get('/logout', 'AuthController.logout').as('logout')

Route.get('/me', 'UserController.showMe').as('me')

Route.get('/users', async () => {
  return User.all()
})
