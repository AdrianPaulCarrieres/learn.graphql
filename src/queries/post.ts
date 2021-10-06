import { intArg, list, mutationField, queryField, stringArg } from "nexus";
import { Context } from "../database/context";
import { Post, User } from "../models";

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
                connect: { email: args.author_email }
            },
            content: args.content
        }

        return await ctx.db.post.create({ data: post, include: { author: true } })
    },
})

const QueryCreateComment = mutationField('createComment', {
    type: Post,
    args: {
        author_email: stringArg(),
        content: stringArg(),
        post_id: intArg()
    },
    async resolve(_root, args, ctx) {
        const post = {
            author: {
                connect: { email: args.author_email }
            },
            content: args.content,
            post: {
                connect: { id: args.post_id }
            }
        }

        return await ctx.db.post.create({ data: post, include: { author: true, post: true } })
    }
})

const QueryPosts = queryField('posts', {
    type: list(Post),
    async resolve(_root, _args, ctx: Context) {
        const l = await ctx.db.$queryRaw`
        SELECT *
        FROM public."Post" t
        INNER JOIN public."Post" as p
        ON p."postId" = t.id
        ORDER BY t.id` as any[]

        for(var i = 0; i < l.length; i++){
            const authorId = l[i].authorId
            const postId = l[i].postId

            l[i].author = ctx.db.user.findUnique({where: {
                id: authorId
            }})
            l[i].post = ctx.db.post.findUnique({
                where:
                {
                    id: postId
                }
            })
        }

        console.table(l)
        return l

        

        return await ctx.db.post.findMany({ include: { author: true, comments: true, post: true } })
    }
})

export { QueryCreatePost, QueryPosts, QueryCreateComment }