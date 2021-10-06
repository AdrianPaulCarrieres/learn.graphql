import {
    arg,
    enumType,
    intArg,
    interfaceType,
    makeSchema,
    objectType,
    queryType,
    stringArg,
    list,
} from 'nexus'

import { Node, User } from '.'

const Post = objectType({
    name: 'Post',
    definition(t) {
        t.implements(Node)
        t.field('author', {
            type: User
        })
        t.field('comments', {
            type: Post
        })
        t.string('content')
        t.string('createdAt')
        t.string('updatedAt')
    }
})

export { Post };