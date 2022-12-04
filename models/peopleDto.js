module.exports = class PeopleDTO {
    id;
    name;
    gender;
    age;
  
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.gender = data.gender;
      this.age = data.age;
    }
  }


