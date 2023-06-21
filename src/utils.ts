import { newUser, newCostumer, Costumer, newOrder, roles } from "./types";
import {
  parseName,
  parsePassword,
  parseNumber,
  parseRole,
  parseNotice,
  parseState,
} from "./parsers";

export const toNewUser = (object: any): Partial<newUser> => {
  const toAddUser: Partial<newUser> = {};

  if (object.firstName) {
    toAddUser.firstName = parseName(object.firstName);
  }

  if (object.password) {
    toAddUser.password = parsePassword(object.password);
  }

  if (object.role) {
    const parsedRole = parseRole(object.role)
    if (parsedRole) {
      toAddUser.role = parsedRole
    } else {
      toAddUser.role = roles.User
    }
  }

  return toAddUser;
};

export const toNewCostumer = (object: any): newCostumer => {
  const newCostumer = {
    firstName: parseName(object.firstName),
    secondName: parseName(object.secondName),
    lastName: parseName(object.lastName),
    phone: parseName(object.phone),
    email: parseName(object.email),
    socials: parseName(object.socials),
  };
  return newCostumer;
};

export const updatedCostumer = (object: any): Partial<Costumer> => {
  const toAddCostumer: Partial<Costumer> = {};

  if (object.firstName) {
    toAddCostumer.firstName = parseName(object.firstName);
  }

  if (object.secondName) {
    toAddCostumer.secondName = parseName(object.secondName);
  }

  if (object.lastName) {
    toAddCostumer.lastName = parseName(object.lastName);
  }

  if (object.phone) {
    toAddCostumer.phone = parseName(object.phone);
  }

  if (object.email) {
    toAddCostumer.email = parseName(object.email);
  }

  if (object.socials) {
    toAddCostumer.socials = parseName(object.socials);
  }

  return toAddCostumer;
};

export const toNewOrder = (
  object: any,
  userId: any,
  costumerId: any
): newOrder => {
  const newOrder = {
    isbn: parseNumber(object.isbn),
    title: parseName(object.title),
    url: parseName(object.url),
    state: parseState(object.state),
    notice: parseNotice(object.notice),
    comment: parseName(object.comment),
    costumer: parseNumber(costumerId),
    user: parseNumber(userId),
  };
  return newOrder;
};
