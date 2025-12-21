export class User {
  constructor({ id, name, email, provider = "local" }) {
    this.id = id;             
    this.name = name;         
    this.email = email;       
    this.provider = provider; // local, google
  }
}
