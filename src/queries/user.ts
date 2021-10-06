import { list, queryType } from "nexus";
import { User } from "../models";

const QueriesUser = queryType({
    definition(t) {
        t.field('users', {
            type: list(User)
        })
    }
})

export {QueriesUser}