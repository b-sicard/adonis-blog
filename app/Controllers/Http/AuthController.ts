import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async login({ auth, request, response }: HttpContextContract) {

        const { email, password } = request.all()

        try {
            const token = await auth.use('api').attempt(email, password)
            return response.send(token)
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

    public async me({auth, response} : HttpContextContract) {
        return response.ok(auth.user)
    }
}
