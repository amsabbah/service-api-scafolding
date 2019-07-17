import { Model } from "mongoose";
import * as Mongoose from "mongoose";
import * as fp from "fastify-plugin";
import { DatabaseConfig } from '../config/database';
import { Example, ExampleModel } from '../app/models/Example.model';

// this interface is just to let typescript know that we have these models so it can autocomplete and correct
export interface Models {
    Example: Model<ExampleModel>;
}

// register all models (optional you can ignore that and import any model you need when needed)
const models: Models = {
    Example: Example
};

export default fp(async (fastify, opts, next) => {
    Mongoose.connection.on("connected", () => {
        fastify.log.info({ actor: "MongoDB" }, "connected");
    });

    Mongoose.connection.on("disconnected", () => {
        fastify.log.error({ actor: "MongoDB" }, "disconnected");
    });

    await Mongoose.connect(
        DatabaseConfig.uri,
        {
            useNewUrlParser: true,
            keepAlive: true
        }
    );

    fastify.decorate("db", { models });

    next();
});
