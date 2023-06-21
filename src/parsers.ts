import {isString, isRole} from './validators'
import { roles, stateOrder, noticesType } from './types'

export const parseName = (nameFromRequest: any): string => {
  if(!isString(nameFromRequest)){
    throw new Error('Incorrect or missing comment')
  }
  return nameFromRequest
}

export const parsePassword = (passFromRequest: any): string => {
  if(!isString(passFromRequest)){
    throw new Error('Incorrect or missing comment')
  }
  return passFromRequest
}

export const parseNumber = (value: any): number => {
  const parsedValue = Number(value);
  if (isNaN(parsedValue)) {
    throw new Error('Invalid or missing number');
  }
  return parsedValue;
}

export const parseRole = (roleFromRequest: any): roles => {
  if(!isString(roleFromRequest) || !isRole(roleFromRequest)){
    throw new Error('Incorrect role')
  }
  return roleFromRequest
}

export const parseState = (stateFromRequest: any): stateOrder => {
  if (!stateFromRequest || typeof stateFromRequest !== 'string' || !(stateFromRequest in stateOrder)) {
    throw new Error('Invalid or missing state');
  }
  return stateFromRequest as stateOrder;
};

export const parseNotice = (noticeFromRequest: any): noticesType => {
  if (!noticeFromRequest || typeof noticeFromRequest !== 'string' || !(noticeFromRequest in noticesType)) {
    throw new Error('Invalid or missing notice');
  }
  return noticeFromRequest as noticesType;
};