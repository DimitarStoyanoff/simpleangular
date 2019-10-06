import { Component, OnInit, Input } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { switchMap, pluck, filter } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../contact-list/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {


 public form: FormGroup;
 private contact: Contact;


  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {

    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl()
    });

    console.log(this.route);
    this.route.params.pipe(
      pluck('name'),
  
      switchMap((name) => {
        return this.contactService.getContactByName(name);
      })
    ) .subscribe((result)=> {
        this.form.reset();
      
        if(result) {
        this.contact = result;
        this.form.controls['firstName'].setValue(result.firstName);
        this.form.controls['lastName'].setValue(result.lastName);
        this.form.controls['age'].setValue(result.age);
        }
    })
  }

  public save() : void {
    if(!this.contact.id) {
        this.contact = {
          ...this.contact,
          id: 7655
        };
    }
     const contact = {
       ...this.contact,
       ...this.form.value
     }
     this.contactService.createContact(contact).subscribe();
  }

}
