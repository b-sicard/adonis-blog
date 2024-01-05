import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {

    public async create({ request }: HttpContextContract) {
        const user = new User()
        user.merge(request.all()).save()
        return user
    }
}
