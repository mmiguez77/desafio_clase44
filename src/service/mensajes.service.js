const MensajePersistence = require('../db_persistence/mensajesPersistence.js');
const dbMensaje = new MensajePersistence();
const { normalize, schema, denormalize } = require('normalizr');
const logger = require('../helpers/winston.js');

async function addMsgService(data) {
    try {
        
        const mensaje = {
            author: {
                email: data.email,
                nombre: data.nombre,
                apellido: data.apellido,
                edad: data.edad,
                alias: data.alias,
                avatar: data.avatar
            },
        };
        mensaje.text = data.text;
        const newMsg = await dbMensaje.addMsgPersistence(mensaje);
        return newMsg;
    } catch (error) {
        logger.error.error(error);
    }
}

async function findAllMsgService() {
    try {
        const mensajes = await dbMensaje.findAllMsgPersistence();
        //const id = 'mensajes';
        return (mensajes);
    } catch (error) {
        logger.error.error(error);
    }
}

async function normalizedDataService() {
    try {
        let mensajes = await dbMensaje.normalizedDataPersistence();
        // console.log(mensajes)
        // console.log('********* MNJ **************', mensajes.author)

        let msgOriginal = {
            id: 'mensajes',
            mensajes: mensajes.map(mensaje => ({ ...mensaje._doc }))
        }

        // console.log('ORIGINAL', msgOriginal)

        const schemaAuthor = new schema.Entity('author', {}, { idAttribute: 'email' });

        const schemaMensaje = new schema.Entity('mensaje', {
            author: schemaAuthor
        }, { idAttribute: '_id' })

        const schemaMensajes = new schema.Entity('mensajes', {
            mensajes: [schemaMensaje]
        }, { idAttribute: 'id' })

        let normalizedData = normalize(msgOriginal, schemaMensajes);

        // console.log(util.inspect(normalizedData, false, 5, true))
        // console.log("length Original", JSON.stringify(msgOriginal).length);
        // console.log("length Normalize", JSON.stringify(normalizedData).length);

        return normalizedData;

    } catch (error) {
        logger.error.error(error);
    }

}

module.exports = {
    addMsgService,
    findAllMsgService,
    normalizedDataService
}