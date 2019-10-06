import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from './contact';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

public contactList : Contact[];
public contactList$ : Observable<Contact[]>;

private subscription : Subscription;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.subscription = this.contactService.getContacts().subscribe((list: Contact[]) => {
      console.log(list);
        this.contactList = list;
    });
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

}
