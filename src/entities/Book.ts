import BaseEntity from './BaseEntity';
import { entity, id, persist } from '../decorators/entity';
import { required } from '../decorators/validators';

@entity("book")
export default class Book extends BaseEntity {

    @id
    id: string;

    @persist
    @required
    title: string;

    @persist
    author: string;

    @persist
    @required
    authorId: string;
}