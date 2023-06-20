// usuarios
export enum roles {
  User = "User",
  Admin = "Admin",
}

export interface User {
  id: number;
  firstName: string;
  password: string;
  role: roles;
  order?: Order[]
}

export interface newUser {
  firstName: string;
  password: string;
  role: roles;
}

// clientes

export interface Costumer {
  id: number;
  firstName: string;
  secondName?: string;
  lastName: string;
  phone?: string;
  email?: string;
  socials?: string;
  order?: Order[];
}

export type newCostumer = Omit<Costumer, 'id'>

// esto es para los pedidos
export enum stateOrder {
  Pendiente = "Pendiente",
  Embolsado = "Embolsado",
  Nd = "Nd",
  Retirado = "Retirado",
  Nvm = "Nvm",
  Desarmar = "Desarmar",
  Nlq = "Nlq",
  BajaNd = "BajaNd",
  Desarmado = "Desarmado",
  Nuevo = "Nuevo",
}

export enum noticesType {
  Mail = "Mail",
  Phone = "Phone",
  Wpp = "Wpp",
}

export interface Order {
  id: number,
  isbn?: number,
  title: string
  url?: string
  state: stateOrder
  notice?: noticesType
  comment: string
}

export type newOrder = Omit<Order, 'id'>