import { Booking } from "./booking";

export const Bookings: Booking[] = [
    {
        id : 1,
        name: "Philipp Winkler",
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date("2023-05-19")
      },
      {
        id : 2,
        name: "Michèle Winkler",
        roomNumber: 114,
        startDate: new Date(),
        endDate: new Date("2023-06-10")
      },
      {
        id : 3,
        name: "Willi Winkler",
        roomNumber: 150,
        startDate: new Date(),
        endDate: new Date("2023-08-13")
      },
      {
        id : 4,
        name: "Thomas Winkler",
        roomNumber: 164,
        startDate: new Date(),
        endDate: new Date("2023-06-24")
      }
];