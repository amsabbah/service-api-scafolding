import * as fastify from 'fastify';
import { Routes } from '../app/routes';
import { Server, IncomingMessage, ServerResponse } from 'http'
import { AppConfig } from '../config/app';

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    logger: true
})

const routes = new Routes();

server.register(routes.load.bind(routes))

server.listen(AppConfig.port, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})
