import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact-list/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact : Contact;
  @Output() deleteChange: EventEmitter<number> = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {
    
  }

  public onDelete(contact: Contact) : void {
    this.deleteChange.emit(contact.id);

  }

}
