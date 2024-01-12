import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

    public async login({ auth, request, response }: HttpContextContract) {

        const { email, password } = request.all()

        try {
            const user = await User.findBy('email', email)
            const token = await auth.use('api').attempt(email, password)
            return response.send({
                user,
                token
            })
        } catch {
            return response.unauthorized({
                title: 'Invalid credentials',
                description: 'Invalid e-mail or password.'
            })
        }
    }
}
