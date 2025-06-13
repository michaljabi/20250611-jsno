import { ServerError } from "../server-error.js";

const inMemoryGuests = [
    { id: 1, name: "Michał", status: "confirmed" },
    { id: 2, name: "Kasia", status: "confirmed" },
    { id: 3, name: "Jacek", status: "unconfirmed" },
    { id: 4, name: "Zosia", status: "confirmed" },
]

let id = 5;

export const guestsService = {
    async getByStatus(status) {
        return inMemoryGuests.filter(g => status ? g.status === status : true)
    },
    async findById(id = 0) {
        const guest = inMemoryGuests.find(g => g.id === id);
        if (!guest) {
            throw new ServerError(`Guest id: ${numId} not found!`, 404);
        }
        return guest
    },
    addNew(name) {
        if (!name) {
            throw new ServerError(`Guest name not provided!`)
        }
        const newId = id++;
        inMemoryGuests.push({ id: newId, name, status: "unconfirmed" });
        return newId;
    }
}