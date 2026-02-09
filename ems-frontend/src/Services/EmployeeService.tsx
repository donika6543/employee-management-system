
import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees"; 

export const listEmployee = () => {
  return axios.get(EMPLOYEE_API_BASE_URL);
}
export const createEmployee = (employee: { firstName: string; lastName: string; email: string }) => {
  return axios.post(EMPLOYEE_API_BASE_URL, employee);}

  export const updateEmployee = (id: number, employee: { firstName: string; lastName: string; email: string }) => {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
}

export const getEmployeeById = (id: number) => {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
}
export const deleteEmployee = (id: number) => {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
};






