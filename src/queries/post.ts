import { list, mutationField, queryField, stringArg } from "nexus";
import { Post } from "../models";

const QueryCreatePost = mutationField('createPost', {
    type: Post,
    args: {
        author_email: stringArg(),
        content: stringArg(),
    },
    async resolve(_root, args, ctx) {
        console.table(args)
        const user = await ctx.db.user.findUnique({
            where: {
                email: args.author_email
            }
        })

        console.table(user)

        const post = {
            author: {
                connect: { id: user.id }
            },
            content: args.content
        }

        return await ctx.db.post.create({ data: post, include: { author: true } })
    },
})

const QueryPosts = queryField('posts', {
    type: list(Post),
    resolve(_root, _args, ctx) {
        return ctx.db.post.findMany({ include: { author: true } })
    }
})

export { QueryCreatePost, QueryPosts }