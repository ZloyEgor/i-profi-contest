import {Employee} from "@/model/employee";
import {employees} from "@/data/employees";
import {filter} from "@/utils/filtration";

export const employeeService = {
  getEmployees: (search: string) =>
    new Promise<Employee[]>(resolve => {
      const [endKey, ...readyKeys] = search.split(' ').toReversed();

      const filteredEmployees = employees.filter(e => filter(e, readyKeys, endKey))
      resolve(filteredEmployees);
    })
}