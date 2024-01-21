import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post";

export default class PostController {

    public async list({ response, request }: HttpContextContract) {
        const { title, author, limit } = request.all()

        const query = Post.query().orderBy('created_at', 'desc')
    
        if (title) query.where('title', 'like', `%${title}%`)
        if (author) query.where('author', 'like', `%${author}%`)
        if (limit) query.limit(limit)
    
        const posts = await query.preload('author')

        return response.ok(posts)
    }

    public async get({ params }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)
        return post
    }

    public async create({ request, auth }: HttpContextContract) {
        const post = new Post()
        post.authorId = auth.user!.id
        post.merge(request.all()).save()
        return post
    }

    public async update({ request }: HttpContextContract) {
        const post = new Post()
        post.merge(request.all()).save()
        return post
    }

    public async delete({ params }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)
        post.delete()
        return
    }
}
