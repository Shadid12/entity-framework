import BaseEntity from './BaseEntity';

export default class Author extends BaseEntity {
    id: string;

    firstName: string;

    lastName: string;

    email: string;

    alias: string;
}