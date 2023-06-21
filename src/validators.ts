import { roles, stateOrder, noticesType } from "./types";

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

export const isRole = (param: any): boolean => {
  return Object.values(roles).includes(param)
}

export const isValidState = (param: any): boolean =>{
  return Object.values(stateOrder).includes(param)
}

export const isValidNotice = (param: any): boolean => {
  return Object.values(noticesType).includes(param)
}