import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../Services/EmployeeService";

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 
    

    function saveEmployee(e: React.FormEvent) {
        e.preventDefault();
        const employee = { firstName, lastName, email };

        createEmployee(employee)
            .then(response => {
                console.log("Employee created:", response.data);
                alert("Employee created successfully!");
                navigate("/"); 
                
            })
            .catch(error => {
                console.error("Error creating employee:", error);
                alert("Failed to create employee");
            });
    }

    return (
        <div className="container" style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card col-md-6 p-4">
                <h2 className="text-center mb-4">Add Employee</h2>
                <div className="card-body">
                    <form onSubmit={saveEmployee}>
                        <div className="form-group mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                            <label className="form-label">First Name</label>
                            <input 
                                type="text"
                                placeholder="Enter Employee First Name"
                                value={firstName}
                                className="form-control form-control-sm"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                            <label className="form-label">Last Name</label>
                            <input 
                                type="text"
                                placeholder="Enter Employee Last Name"
                                value={lastName}
                                className="form-control form-control-sm"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                            <label className="form-label">Email</label>
                            <input 
                                type="email"
                                placeholder="Enter Employee Email"
                                value={email}
                                className="form-control form-control-sm"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent;




