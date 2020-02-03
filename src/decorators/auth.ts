import { db } from '../app';
import { Request, Response } from "express";


interface UserDetails {
    username: string;
    password: string;
}

export function auth() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const req = args[0] as Request;
            const res = args[1] as Response;
            const url = req.url;
            const entity = req.baseUrl.replace("/", "");
            const authHeader = req.headers.authorization;
            
            // Did user pass in authentication
            if (!authHeader) {
                res.status(403).send("Not Authorized");
                return;
            }

            // Is this a valid user with a valid password
            if (!isValidUser(authHeader)) {
                res.status(403).send("Invalid User");
                return;
            }

            original.apply(this, args);
        }
    }
}

function isValidUser(authHeader: string): boolean {
    const details = getUserDetails(authHeader);
    const users = db.getData(`/users`);
    if (!users.hasOwnProperty(details.username)) {
        return false;
    }
    if (users[details.username].password !== details.password) {
        return false;
    }
    return true;
}

function getUserDetails(authHeader: string): UserDetails {
    const base64Auth = (authHeader || '').split(' ')[1] || '';
    const strauth = Buffer.from(base64Auth, 'base64').toString();
    const splitIndex = strauth.indexOf(':');
    const username = strauth.substring(0, splitIndex);
    const password = strauth.substring(splitIndex + 1);
    return {
        username: username,
        password: password
    };
}