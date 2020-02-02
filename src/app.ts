import APIServer from "./APIServer";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig"
import Author from "./entities/Author";
import Book from "./entities/Book";

export const apiServer = new APIServer();

export const db = new JsonDB(new Config("DB", true, true, '/'));
apiServer.addEntity<Author>(Author);
apiServer.addEntity<Book>(Book);

apiServer.start();