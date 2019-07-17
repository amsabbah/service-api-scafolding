import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import * as fastify from 'fastify';
import { Routes } from '../app/routes';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { AppConfig } from '../config/app';
import DB from './database';

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    logger: true
});

const routes = new Routes();

server.register(DB);
server.register(routes.load.bind(routes));

const start = async () => {
    try {
        const address = await server.listen(AppConfig.port);
        server.log.info(`server listening on ${address}`)
    } catch (err) {
        console.log(err);
        server.log.error(err);
        process.exit(1);
    }
};

process.on("uncaughtException", error => {
    console.error(error);
});
process.on("unhandledRejection", error => {
    console.error(error);
});

start();
