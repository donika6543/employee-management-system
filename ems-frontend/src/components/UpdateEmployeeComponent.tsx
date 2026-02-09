import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../Services/EmployeeService";

const UpdateEmployeeComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployeeById(+id)
                .then(response => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            const employee = { firstName, lastName, email };
            updateEmployee(+id, employee)
                .then(() => {
                    alert("Employee updated successfully!");
                    navigate("/");
                })
                .catch(error => {
                    console.error(error);
                    alert("Failed to update employee");
                });
        }
    };

    return (
        <div className="container" style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card col-md-6 p-4">
                <h2 className="text-center mb-4">Update Employee</h2>
                <div className="card-body">
                    <form onSubmit={handleUpdate}>
                        <div className="form-group mb-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
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
                                value={email}
                                className="form-control form-control-sm"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeComponent;
