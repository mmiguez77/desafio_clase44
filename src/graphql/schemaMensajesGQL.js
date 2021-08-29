const { buildSchema } = require("graphql");
const { addMsg, findAllMsg } = require("./functions/FnMensajesGQL.js");

const schemaMensajesGQL = buildSchema(`
  input author {
    email: String!,
    nombre: String!,
    apellido: String!,
    edad: Int!,
    alias: String!,
    avatar: String!
    text: String!
   },
    type Mensaje {
    email: String!,
    nombre: String!,
    apellido: String!,
    edad: Int!,
    alias: String!,
    avatar: String!,
    text: String!
  },
  type Query {
    findAllMsg: [Mensaje],
  },
  type Mutation {
    addMsg(input: author): Mensaje,
  }
`);

const rootMensajesGQL = {
  findAllMsg: findAllMsg,
  addMsg: addMsg,
};

module.exports = { schemaMensajesGQL, rootMensajesGQL };
