"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIServer_1 = __importDefault(require("./APIServer"));
const node_json_db_1 = require("node-json-db");
const JsonDBConfig_1 = require("node-json-db/dist/lib/JsonDBConfig");
const Author_1 = __importDefault(require("./entities/Author"));
const Book_1 = __importDefault(require("./entities/Book"));
exports.apiServer = new APIServer_1.default();
exports.db = new node_json_db_1.JsonDB(new JsonDBConfig_1.Config("DB", true, true, '/'));
exports.apiServer.addEntity(Author_1.default);
exports.apiServer.addEntity(Book_1.default);
exports.apiServer.start();
//# sourceMappingURL=app.js.map