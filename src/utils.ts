import {newUser, roles, newCostumer, Costumer, newOrder, stateOrder, noticesType} from "./types";
// parsers
const parseName = (nameFromRequest: any): string => {
  if(!isString(nameFromRequest)){
    throw new Error('Incorrect or missing comment')
  }
  return nameFromRequest
}

const parsePassword = (passFromRequest: any): string => {
  if(!isString(passFromRequest)){
    throw new Error('Incorrect or missing comment')
  }
  return passFromRequest
}

const parseNumber = (value: any): number => {
  const parsedValue = Number(value);
  if (isNaN(parsedValue)) {
    throw new Error('Invalid or missing number');
  }
  return parsedValue;
}

const parseRole = (roleFromRequest: any): roles => {
  if(!isString(roleFromRequest) || !isRole(roleFromRequest)){
    throw new Error('Incorrect role')
  }
  return roleFromRequest
}

const parseState = (stateFromRequest: any): stateOrder => {
  if (!stateFromRequest || typeof stateFromRequest !== 'string' || !(stateFromRequest in stateOrder)) {
    throw new Error('Invalid or missing state');
  }
  return stateFromRequest as stateOrder;
};

const parseNotice = (noticeFromRequest: any): noticesType => {
  if (!noticeFromRequest || typeof noticeFromRequest !== 'string' || !(noticeFromRequest in noticesType)) {
    throw new Error('Invalid or missing notice');
  }
  return noticeFromRequest as noticesType;
};

// validators
const isRole = (param: any): boolean => {
  return Object.values(roles).includes(param)
}

const isValidState = (param: any): boolean =>{
  return Object.values(stateOrder).includes(param)
}

const isValidNotice = (param: any): boolean => {
  return Object.values(noticesType).includes(param)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (param: number): boolean => {
  return typeof param === 'number'
}

export const toNewUser = (object: any): Partial<newUser> => {
  const toAddUser: Partial<newUser> = {};

  if (object.firstName) {
    toAddUser.firstName = parseName(object.firstName);
  }

  if (object.password) {
    toAddUser.password = parsePassword(object.password);
  }

  if (object.role) {
    toAddUser.role = parseRole(object.role);
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
  }
  return newCostumer
}

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

export const toNewOrder = (object: any, userId: any, costumerId: any): newOrder => {
  const newOrder = {
    isbn: parseNumber(object.isbn),
    title: parseName(object.title),
    url: parseName(object.url),
    state: parseState(object.state),
    notice: parseNotice(object.notice),
    comment: parseName(object.comment),
    costumer: parseNumber(costumerId),
    user: parseNumber(userId)
  }
  return newOrder
}