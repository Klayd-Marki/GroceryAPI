module.exports = class PeopleDTO {
    id;
    name;
    age;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        
    }
}

