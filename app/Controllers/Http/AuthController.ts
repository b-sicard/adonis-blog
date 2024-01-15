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
                error: 'Invalid credentials'
            })
        }
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.use('api').logout()
        return response.ok
    }
}
