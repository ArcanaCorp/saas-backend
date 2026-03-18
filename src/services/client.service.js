let clients = [];
let nextId = 1;

export const createClient = (clientData) => {
    const newClient = {
        id: nextId++,
        ...clientData 
    };
    clients.push(newClient);
    return newClient;
};

export const getClients = () => {
    return clients;
};