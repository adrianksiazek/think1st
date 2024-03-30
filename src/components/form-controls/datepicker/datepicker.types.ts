export interface Holiday {
  date: string;
}

export interface Observance {
  date: string;
  holidayName: string;
}

export interface GetDatesResponse {
  type: string;
  name: string;
  date: string;
}

export enum DayType {
  NATIONAL_HOLIDAY = "NATIONAL_HOLIDAY",
  OBSERVANCE = "OBSERVANCE",
}
