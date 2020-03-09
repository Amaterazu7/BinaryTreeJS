class Employee {
    constructor(name, age, coder) {
        this.name = name;
        this.age = age;
        this.coder = coder;
    }
}

class Manager extends Employee {
    constructor(name, age, coder, subordinates) {
        super(name, age, coder);
        this.subordinates = subordinates ? subordinates : [];
    }
}

module.exports = {
    Employee,
    Manager,
};
