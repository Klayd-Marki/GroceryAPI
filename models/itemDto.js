module.exports = class PeopleDTO {
    id;
    name;
    category;
    price;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.category = data.category;
        this.price = data.price

    }
}

