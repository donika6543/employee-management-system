import { useEffect, useState } from "react";
import { listEmployee, deleteEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const navigate = useNavigate();

  // Fetch employees
  const fetchEmployees = () => {
    listEmployee()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addNewEmployee = () => navigate("/add-employee");
  const updateEmployeeRoute = (id?: number) => navigate(`/update-employee/${id}`);

  const handleDelete = (id?: number) => {
    if (id && window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id)
        .then(() => {
          alert("Employee deleted successfully!");
          fetchEmployees(); // Refresh the list
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to delete employee");
        });
    }
  };

  return (
    <div className="container">
      <h2>List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id ?? Math.random()}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => updateEmployeeRoute(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;









