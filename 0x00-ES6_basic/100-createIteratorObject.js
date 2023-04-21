export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const employeeNames = [];
      for (const department of Object.keys(report.allEmployees)) {
        for (const employee of report.allEmployees[department]) {
          employeeNames.push(employee);
        }
      }
      const sizeOfEmployees = employeeNames.length;
      let counter = 0;
      return {
        next() {
          if (counter < sizeOfEmployees) {
            counter += 1;
            return { done: false, value: employeeNames[counter - 1] };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
