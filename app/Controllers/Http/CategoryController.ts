import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoryController {

    public async list({ response }: HttpContextContract) {
        const categories: Category[] = await Category.query().orderBy('created_at', 'desc')
        console.log(categories)
        return response.ok(categories)
    }

    public async create({ request, response }: HttpContextContract) {
        const category = await Category.create(request.all())
        console.log(category)
        return response.created(category)
    }

    public async update() {

    }

    public async delete() {
        
    }
}
