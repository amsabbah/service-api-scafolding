import { FastifyInstance } from 'fastify';

export interface RouterInterface {
    load(server: FastifyInstance, options: any): void
}