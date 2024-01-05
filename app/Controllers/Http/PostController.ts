import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post";

export default class PostController {

    public async list() {
        const posts = await Post.all()
        return posts
    }

    public async get({ params }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)
        return post
    }

    public async create({ request }: HttpContextContract) {
        const post = new Post()
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
