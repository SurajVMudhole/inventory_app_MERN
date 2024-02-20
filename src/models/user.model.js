export default class UserModel {
  constructor(id, user_name, user_email, password) {
    this.id = id;
    this.user_name = user_name;
    this.user_email = user_email;
    this.password = password;
  }
  static add(name, email, password) {
    const newuser = new UserModel(Users.length + 1, name, email, password);
    Users.push(newuser);
  }
  static getUser(email, password) {
    const result = Users.find(
      (p) => p.user_email == email && p.password == password
    );
    return result;
  }
}
var Users = [];
