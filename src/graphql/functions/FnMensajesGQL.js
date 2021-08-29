const {
  addMsgService,
  findAllMsgService,
} = require("../../service/mensajes.service.js");
const logger = require("../../helpers/winston.js");

async function addMsg({ input }) {
  try {
    const data = await { ...input };
    const newMsg = await addMsgService(data);

    const mensaje = {
        email: newMsg.author.email,
        nombre: newMsg.author.nombre,
        apellido: newMsg.author.apellido,
        edad: newMsg.author.edad,
        alias: newMsg.author.alias,
        avatar: newMsg.author.avatar,
        text: newMsg.text,
      };
    return mensaje;
  } catch (error) {
    logger.error.error(error);
  }
}

async function findAllMsg() {
  try {
    const mensajes = await findAllMsgService();
    const mensaje = mensajes.map((msg) => {
      return {
        email: msg.author.email,
        nombre: msg.author.nombre,
        apellido: msg.author.apellido,
        edad: msg.author.edad,
        alias: msg.author.alias,
        avatar: msg.author.avatar,
        text: msg.text,
      };
    });
    return mensaje;
  } catch (error) {
    logger.error.error(error);
  }
}

module.exports = { addMsg, findAllMsg };
