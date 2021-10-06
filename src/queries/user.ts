import { list, mutationField, queryField, stringArg } from "nexus";
import { User } from "../models";

const QueryUsers = queryField('users', {
    type: list(User),
    args: {
    },
    async resolve(_root, _args, ctx) {
        return await ctx.db.user.findMany()
    }
})

const QueryRegister = mutationField('register', {
    type: User,
    args: {
        email: stringArg(),
        password: stringArg(),
        firstName: stringArg(),
        lastName: stringArg()
    },
    async resolve(_root, args, ctx) {
        console.table(args)
        const user = {
            email: args.email,
            password: args.password,
            firstName: args.firstName,
            lastName: args.lastName
        }

        return await ctx.db.user.create({ data: user })
    },
})

export { QueryUsers, QueryRegister }