export type WeekdayName =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type FromTo = {
  from: string;
  to: string;
  active: boolean;
};

export type BookingTimes = Record<WeekdayName, FromTo>;
