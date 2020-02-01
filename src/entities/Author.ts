import BaseEntity from './BaseEntity';
import { entity, id, persist } from '../decorators/entity';

@entity("author")
export default class Author extends BaseEntity {

    @id
    id: string;

    @persist
    firstName: string;

    @persist
    lastName: string;

    @persist
    email: string;

    @persist
    alias: string;
}