import BaseEntity from './BaseEntity';
import { entity, id, persist } from '../decorators/entity';

@entity("book")
export default class Book extends BaseEntity {

    @id
    id: string;

    @persist
    title: string;

    @persist
    author: string;

    @persist
    authorId: string;
}