'use client'
import {useQuery} from "@tanstack/react-query";
import {employeeService} from "@/service/employeeService";
import {useEffect, useState} from "react";
import {employees} from "@/data/employees";
import {EmployeeCard} from "@/components/employee-card";
import './style.scss'

const Page = () => {

  const [search, setSearch] = useState('');
  const {data = []} = useQuery({queryFn: () => employeeService.getEmployees(search), queryKey: ['getEmployees', search]})

  return (<div>
    <div>Поиск по сотрудникам:</div>
    <input onChange={(event) => {
      setSearch(event.target.value)
    }}/>
    {data.length === 0 && <div>Результат не найден</div>}
    {data.map(employee => <div key={employee.id} className="card-container"><EmployeeCard className="" {...employee}/><hr/></div>)}
  </div>);
}

export default Page;