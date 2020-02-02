import BaseEntity from './BaseEntity';
import { entity, id, persist } from '../decorators/entity';
import { required, isEmail } from '../decorators/validators';

@entity("author")
export default class Author extends BaseEntity {

    @id
    id: string;

    @persist
    @required
    firstName: string;

    @persist
    lastName: string;

    @persist
    @isEmail
    @required
    email: string;

    @persist
    alias: string;
}