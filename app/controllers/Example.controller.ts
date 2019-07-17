import { FastifyRequest, FastifyReply } from 'fastify';
import { ServerResponse } from 'http';

export class ExampleController {

    static async pingRouteHandler(request: FastifyRequest, reply: FastifyReply<ServerResponse>) {
        return { pong: 'it works' }
    }

}
