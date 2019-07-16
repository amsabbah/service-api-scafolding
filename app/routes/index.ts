import { RouterInterface } from '../interfaces/RouterInterface';
import { ExampleRouter } from './example';
import { FastifyInstance } from 'fastify';

const routes: { [index: string]: RouterInterface; } = {
    example: new ExampleRouter
}

export class Routes {

    async load(server: FastifyInstance, options: any) {

        const entries = Object.entries(routes);

        for (const [name, value] of entries) {
            await value.load(server, options);
        }

    }

}
