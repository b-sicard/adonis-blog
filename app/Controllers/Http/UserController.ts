import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {

    public async get({ params }: HttpContextContract) {
        const user = await User.findOrFail(params.id)
        return user
    }

    public async create({ request, response }: HttpContextContract) {

        const hasUser = await User.findBy('email', request.input('email'))

        if (hasUser) {
            return response.unauthorized({
                errors: [
                    {
                        'message': 'User already exists'
                    }
                ],
            })
        }

        const user = await User.create(request.all())
        return response.ok(user)
    }
}
