import {ComponentProps, FC} from "react";

export type EmployeeCardProps = {
  className?: string;
  id: string | number;
  firstName: string;
  secondName: string;
  middleName: string;
  email: string;
}
export const EmployeeCard: FC<EmployeeCardProps> = ({className, id, firstName, middleName, secondName, email}) => {
  return <div id={String(id)} className={className}>
    <div>Фамилия: {secondName}</div>
    <div>Имя: {firstName}</div>
    <div>Отчество: {middleName}</div>
    <div>Email: {email}</div>
  </div>
}

