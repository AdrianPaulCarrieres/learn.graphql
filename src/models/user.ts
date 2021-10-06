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

const User = objectType({
    name: 'User',
    isTypeOf(source) {
        return 'email' in source
    },
    definition(t) {
        t.id('id', { description: 'Unique identifier for the resource' })
        t.string('email')
        t.string('password')
        t.string('firstName')
        t.string('lastName')
    }
})

export { User };