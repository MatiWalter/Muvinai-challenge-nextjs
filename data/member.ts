import dayjs from 'dayjs';
import { IMember } from 'types';

const last_subscription_date = dayjs();
const next_payment_date = last_subscription_date.add(1, 'month').subtract(7, 'day');
const fecha_vigencia = next_payment_date.add(27, 'day');

export const member: IMember = {
  activePlan: 'Plan Elite Mensual',
  birthday: new Date(1997, 3, 21),
  dni: '40426969',
  email: 'matias@muvinai.com',
  id: Math.floor(Math.random() * 100000).toFixed(),
  lastName: 'Walter',
  name: 'Matias',
  next_payment_date: next_payment_date.toDate(),
  phone: '2304577576',
  last_subscription_date: last_subscription_date.toDate(),
  status: 'Activo',
  fecha_vigencia: fecha_vigencia.toDate(),
  avatar: 'https://reqres.in/img/faces/7-image.jpg',
};
