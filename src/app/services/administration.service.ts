import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../config/http';


export interface Creator {
  id: number;
  name: string;
  firstname: string;
  cin: string;
  phoneNumber: string;
  email: string;
}

export interface SellPoint {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
}

export interface Event {
  id: number;
  name: string;
  type: string;
  address: string;
  capacity: number;
  alcoholRules: string;
  ageRules: string;
  dressCode: string;
  ticketPrice: number;
  eventDate: string;
  isConfirmed: boolean;
  isAccepted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }


  // Get Creators
  getCreators() {
    return this.http.get<Creator[]>(BACKEND_URL  + '/creator')
  }

  // Get Sellpoints
  getSellpoints() {
    return this.http.get<SellPoint[]>(BACKEND_URL  + '/sell-point')
  }

  // Get Events
  getEvents() {
    return this.http.get<Event[]>(BACKEND_URL  + '/event')
  }


  // Confirm Event
  confirmEvent(id: number) {
    return this.http
      .patch(BACKEND_URL  + '/event/' + id.toString(), { isAccepted: true, isConfirmed: true })
  }

  // Reject Event
  rejectEvent(id: number) {
    return this.http
      .patch(BACKEND_URL  + '/event/' + id.toString(), { isAccepted: true })
  }
}
