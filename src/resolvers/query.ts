import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query: {
        hola(): string {
            return 'hola mundo';
        },
        holaConNombre(__: void, { nombre }: { nombre: string }): string {
            return `Hola mundo con ${nombre}`;
        } 
    }
};
export default query;
