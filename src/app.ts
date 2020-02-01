import APIServer from "./APIServer";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig"

export const apiServer = new APIServer();

export const db = new JsonDB(new Config("DB", true, true, '/'));

apiServer.start();