export class User {

  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public role: string,
    public status: string,
    public createdAt: Date,
    public modifiedAt: Date,
  ){ }

}
