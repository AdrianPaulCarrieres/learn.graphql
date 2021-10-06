import { argsToArgsConfig } from "graphql/type/definition";
import { arg, extendType, list, mutationField, queryType, stringArg } from "nexus";
import { type } from "os";
import { User } from "../models";

const QueryUsers = queryType({
    definition(t) {
        t.field('users', {
            type: list(User)
        })
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
    resolve(_root, args, ctx) {
        console.table(args)
        const user = {
            email: args.email,
            password: args.password,
            firstName: args.firstName,
            lastName: args.lastName
        }

        return ctx.db.user.create({data: user})
    },
  })

export {QueryUsers, QueryRegister}