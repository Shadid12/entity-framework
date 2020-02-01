import "reflect-metadata";

export default class BaseEntity implements IEntity {

    getPersistenceObject(): any {
        // TODO: Implement
        let output = {};
        return output;
    }

}

// Interfaces
export interface IEntity {
    getPersistenceObject(): any;
}

export type EntityTypeInstance<T> = new (...args: any[]) => T;