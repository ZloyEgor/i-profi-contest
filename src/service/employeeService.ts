import {Employee} from "@/model/employee";
import {employees} from "@/data/employees";

export const employeeService = {
  getEmployees: (search: string) =>
    new Promise<Employee[]>(resolve => {
      const [endKey, ...readyKeys] = search.split(' ').toReversed();

      const filteredEmployees = employees.filter(e => {

        const isAllReadyKeysFit = readyKeys.every((searchKey) =>
          Object.values(e).some(value => value === searchKey))

        const restFields = Object.values(e).filter(value => readyKeys.every(searchKey => searchKey !== value));

        const isEndKeyFit = restFields.some(value => typeof value === 'string' && value.includes(endKey));

        return isAllReadyKeysFit && isEndKeyFit;

      })
      resolve(filteredEmployees);
    })
}