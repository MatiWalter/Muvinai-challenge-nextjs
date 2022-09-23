export interface IMember {
  activePlan: TActivePlan;
  avatar: string;
  birthday: Date;
  dni: string;
  email: string;
  id: string;
  lastName: string;
  name: string;
  phone: string;
  status: Status;
  last_subscription_date: Date;
  next_payment_date: Date;
  fecha_vigencia: Date;
}

export type TActivePlan =
  | 'Plan Elite Mensual'
  | 'Plan Basico Mensual';

type Status =
  | 'Activo'
  | 'Inactivo'
  | 'Baja'
  | 'Pago en proceso';

export interface IAccesos {
  id: number;
  sede: string;
  quantity: number
}

export interface IPayment {
  id: string;
  amount: string;
  card: string;
  brand: string;
  date: Date;
  status: 'approved' | 'rejected'
}

export interface IAssociation {
  id: number;
  initialDate: Date;
  finalDate: Date;
}

export interface IDiscount {
  id: number;
  code: string;
  amount: string;
  applied: Date;
  expiration: Date;
}

export interface IHistory {
  id: number;
  user: string;
  role: string;
  date: Date;
  from: string;
  to: string;
  changes: string;
}
