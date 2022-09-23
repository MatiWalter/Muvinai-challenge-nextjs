import { IAccesos, IAssociation, IDiscount, IHistory, IMember, IPayment } from 'types';
import { associations } from 'data/associations';
import { discounts } from 'data/discounts';
import { history } from 'data/history';
import { member } from '../data/member';
import { accesos } from '../data/accesos';
import { payments } from '../data/payments';

export const api = {
  member: {
    get: async (): Promise<{ 'data': IMember }> =>
      new Promise((resolve, reject) => {
        if (member) {
          setTimeout(
            () =>
            resolve({ data: member }),
            1000
          );
        } else {
          reject();
        }
      }),
  },
  accesos: {
    get: async (): Promise<{ 'data': IAccesos[] }> =>
      new Promise((resolve, reject) => {
        if (accesos) {
          setTimeout(
            () =>
            resolve({ data: accesos }),
            1000
          );
        } else {
          reject();
        }
      }),
  },
  payment: {
    get: async (): Promise<{ 'data': IPayment[] }> =>
      new Promise((resolve, reject) => {
        if (payments) {
          setTimeout(
            () =>
            resolve({ data: payments }),
            1000
          );
        } else {
          reject();
        }
      }),
  },
  associations: {
    get: async (): Promise<{ 'data': IAssociation[] }> =>
      new Promise((resolve, reject) => {
        if (associations) {
          setTimeout(
            () =>
            resolve({ data: associations }),
            1000
          );
        } else {
          reject();
        }
      }),
  },
  discounts: {
    get: async (): Promise<{ 'data': IDiscount[] }> =>
      new Promise((resolve, reject) => {
        if (discounts) {
          setTimeout(
            () =>
            resolve({ data: discounts }),
            1000
          );
        } else {
          reject();
        }
      }),
  },
  history: {
    get: async (): Promise<{ 'data': IHistory[] }> =>
      new Promise((resolve, reject) => {
        if (history) {
          setTimeout(
            () =>
            resolve({ data: history }),
            1000
          );
        } else {
          reject();
        }
      }),
  },
};
