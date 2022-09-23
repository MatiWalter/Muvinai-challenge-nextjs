import { IPayment } from 'types';

export function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const payments: IPayment[] = [
  {
    id: '5',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Visa',
    date: randomDate(new Date(2021, 0, 1), new Date()),
    status: 'rejected',
  },
  {
    id: '4',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Visa',
    date: randomDate(new Date(2021, 0, 1), new Date()),
    status: 'rejected',
  },
  {
    id: '3',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Mastercard',
    date: randomDate(new Date(2021, 0, 1), new Date()),
    status: 'approved',
  },
  {
    id: '2',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Mastercard',
    date: randomDate(new Date(2021, 0, 1), new Date()),
    status: 'rejected' },
  {
    id: '1',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Visa',
    date: randomDate(new Date(2021, 0, 1), new Date()),
    status: 'approved',
  },
];
