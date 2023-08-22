export class Student {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;

  constructor(id: number = 0, firstName: string = '', lastName: string = '', emailId: string = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
  }
}



