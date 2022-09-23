import { IDiscount } from 'types';
import { randomDate } from './payments';

export const discounts: IDiscount[] = [
  { id: 1, code: 'OSDE', amount: '20%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 2, code: 'OSDE', amount: '50%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 3, code: 'OSDE', amount: '20%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 4, code: 'OSDE', amount: '33%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 5, code: 'OSDE', amount: '5%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 6, code: 'OSDE', amount: '25%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 7, code: 'OSDE', amount: '20%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
  { id: 8, code: 'OSDE', amount: '15%', applied: randomDate(new Date(2021, 0, 1), new Date()), expiration: randomDate(new Date(2021, 0, 1), new Date()) },
];
