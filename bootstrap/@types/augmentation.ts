import * as http from "http";
import { Models } from "../database";

declare module "fastify" {
    export interface FastifyInstance<
        HttpServer = http.Server,
        HttpRequest = http.IncomingMessage,
        HttpResponse = http.ServerResponse
        > {
        db: { models: Models };
    }
}
