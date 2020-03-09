/**
 * `employeeArrayList` is an array of employee JSON objects
 * (see employees.js as example). The function `buildTree`
 * takes the array of JSON objects and constructs a tree
 * consisting of Manager and Employee nodes (see model.js)
 * to model this organization. Manager and Employee object
 * should act as Nodes inside the tree.
 * Illustration: https://imgur.com/a/tyTWuvR
 * Inside the `employees` array the subordinates of each Manager
 * are listed as String but they represent whole objects
 * located inside the array.
 * All employees are present in the array, there are no edge cases.
 *
 * For this example we will assume that the first item in the Array
 * is the Root Node.
 */
/**
 * @param {Array} employees - employees JSON array
 * @returns {Object<Manager>} companyTree - root tree node
 */

const { Employee, Manager } = require('../model/EmployeeKind');

const kindOfEmployee = emp => {
    if (emp.subordinates) {
        return new Manager(emp.name, emp.age, emp.coder, emp.subordinates);
    } else {
        return new Employee(emp.name, emp.age, emp.coder);
    }
};

module.exports.buildTree = (employeeArrayList) => {
    const manager = employeeArrayList.shift();
    this.root = kindOfEmployee(manager);
    const searchTree = node => {
        let n = kindOfEmployee(node);
        if (n.subordinates && employeeArrayList.length !== 1) {
            n.subordinates.forEach((item, subIdx) => {
                const searchSubObj = element => n.subordinates[subIdx] === element.name;
                const index = employeeArrayList.findIndex(searchSubObj);
                let sub = employeeArrayList.splice(index, 1);
                n.subordinates.splice(subIdx, 1, kindOfEmployee(sub[0]));
                searchTree(sub[0]);
            });
        }
    };

    searchTree(this.root);
    return this.root;
};
