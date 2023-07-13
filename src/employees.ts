interface IEmployee{
  fName: string;
  lName: string;
  age: number;
  cool?: boolean;
  apps: {appName: string; production: boolean}
}
interface IManager extends IEmployee {
  salaryTier: number
}

const employees: IEmployee[] = [{id: 12, fName: 'Jon', lName: 'Smith', age: 25, cool: true }]
let student1: IEmployee = {
  fName: 'Jon',
  lName: "Smith",
  age: 25,
  cool: true,
  apps: {appName: 'CF Akeneo', production: true} ,
}
let manager1 : IManager = {
  fName: 'Jon',
  lName: 'Smith',
  age: 25,
  cool: true,
  apps: {appName : 'CF Akeneo', production: true},
  salaryTier: 2,
}