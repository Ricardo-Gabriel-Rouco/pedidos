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
  order?: Order[];
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

export type newCostumer = Omit<Costumer, "id">;

// esto es para los pedidos
export enum stateOrder {
  Nuevo = "Nuevo",
  Pendiente = "Pendiente",
  Embolsado = "Embolsado",
  Avisado = "Avisado",
  Retirado = "Retirado",
  Desarmar = "Desarmar",
  Desarmado = "Desarmado",
  Nd = "Nd",
  Nvm = "Nvm",
  Nlq = "Nlq",
  BajaNd = "BajaNd",
}

export enum noticesType {
  Mail = "Mail",
  Phone = "Phone",
  Wpp = "Wpp",
}

export interface Order {
  id: number;
  isbn?: number;
  title: string;
  url?: string;
  state: stateOrder;
  notice?: noticesType;
  comment: string;
  modifiedBy?: number;
  modifiedAt?: Date;
}

export type newOrder = Omit<Order, "id">;

export interface modificationType {
  id?: number;
  userId: number;
  orderId: number;
  modification: string;
  modificationDate: Date;
}
