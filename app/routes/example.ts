import { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { RouterInterface } from '../interfaces/RouterInterface';

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

export class ExampleRouter implements RouterInterface {

    async load(server: FastifyInstance, options: any) {
        server.get('/ping', opts, async (request, reply) => {
            return { pong: 'it works' }
        })
    }

}