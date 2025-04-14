export interface IPatient {
  id: string;
  name: string;
  lastName: string;
  birthDate: Date;
  historyPatient: string[];
}

export type IPatientRequest = Omit<IPatient, 'id'>;
