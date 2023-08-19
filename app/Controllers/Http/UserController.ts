import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserController {
  public showMe({ view, auth, response }: HttpContextContract) {
    if (!auth.user) return response.redirect('/login')
    return view.render('me')
  }
}
