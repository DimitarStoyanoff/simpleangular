import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from './contact-list/contact';

@Injectable()
export class ContactService {

private apiUrl = `${environment.apiUrl}/contacts`;

  constructor(private httpClient : HttpClient) {

   }

   public getContacts() : Observable<Contact[]> {
     return this.httpClient.get<Contact[]>(this.apiUrl);
   }
}
