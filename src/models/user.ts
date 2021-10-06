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

import { Node } from '.'

const User = objectType({
    name: 'User',
    isTypeOf(source) {
        return 'email' in source
    },
    definition(t) {
        t.implements(Node)
        t.string('email')
        t.string('password')
        t.string('firstName')
        t.string('lastName')
    }
})

export { User };