import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, ReplaySubject } from 'rxjs';
import { Contact } from './contact-list/contact';
import { map, tap } from 'rxjs/operators'

@Injectable()
export class ContactService {

private apiUrl = `${environment.apiUrl}/contacts`;
private updateList$: ReplaySubject<boolean> = new ReplaySubject();

  constructor(private httpClient : HttpClient) {
      this.updateList$.next(true);
   }

   public isListUpdated() : Observable<boolean> {
      return this.updateList$.asObservable();
   }

   public getContacts() : Observable<Contact[]> {
     return this.httpClient.get<Contact[]>(this.apiUrl);
   }

   public getContactByName(name: String) : Observable<Contact> {
     return this.httpClient.get<Contact[]>(this.apiUrl).pipe(
        map((contacts: Contact[]) => contacts.find(
          (contact) => contact.firstName === name)
        ) 
     );
   }

   public deleteContact(id: number) : Observable<void> {
     return this.httpClient.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.updateList$.next(true))
    );
   }

   public createContact(contact: Contact) : Observable<Contact> {
     return this.httpClient.post<Contact>(this.apiUrl,contact).pipe(
       tap(() => this.updateList$.next(true))
     );
   }
   
}
