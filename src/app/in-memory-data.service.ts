import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookings: Booking[] = [
      {
        id : 1,
        name: "Erika Musterfrau",
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date("2023-05-19")
      },
      {
        id : 2,
        name: "Max Mustermann",
        roomNumber: 114,
        startDate: new Date(),
        endDate: new Date("2023-06-10")
      },
      {
        id : 3,
        name: "Maria Müller",
        roomNumber: 150,
        startDate: new Date(),
        endDate: new Date("2023-08-13")
      },
      {
        id : 4,
        name: "Hans Meier",
        roomNumber: 164,
        startDate: new Date(),
        endDate: new Date("2023-06-24")
      }
      ]

      return {bookings};
  }



  constructor() { }
}
