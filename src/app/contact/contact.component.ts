import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  fullName: string = '';
  companyName: string = '';
  phoneNumber: string = '';
  email: string = '';

  requiredFullName = false;
  requiredCompanyName = false;
  requiredPhoneNumber = false;
  requiredEmail = false;

  validPhoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  errorValidPhoneNumber = false;
  errorValidEmail = false;

  onSubmit(event: any) {
    event.preventDefault();

    this.requiredFullName = !this.fullName.length;
    this.requiredCompanyName = !this.companyName.length;
    this.requiredPhoneNumber = !this.phoneNumber.length;
    this.requiredEmail = !this.email.length;

    this.errorValidPhoneNumber =
      !this.validPhoneNumber.test(this.phoneNumber) &&
      !this.requiredPhoneNumber;

    this.errorValidEmail = !this.validEmail.test(this.email) && !this.requiredEmail;
  }
}
