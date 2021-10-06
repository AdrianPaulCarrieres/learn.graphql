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

const Node = interfaceType({
    name: 'Node',
    definition(t) {
      t.id('id', { description: 'Unique identifier for the resource' })
    },
  })

export { Node }