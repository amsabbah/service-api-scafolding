import { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { RouterInterface } from '../interfaces/RouterInterface';
import { ExampleController } from '../controllers/Example.controller';

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

    async load(server: FastifyInstance, options: Object) {
        server.get('/ping', opts, ExampleController.pingRouteHandler);
    }

}
