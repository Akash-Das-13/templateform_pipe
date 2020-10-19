import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  // Implement addContacts method using HttpClient for a saving a Contacts details
  addContact(contact): Observable<any> {
    return this.http.post(environment.Api, contact);
  }

  // Implement getAllContactss method using HttpClient for getting all Contacts details
  getAllContacts(): Observable<any> {
    return this.http.get(environment.Api);
  }
}
