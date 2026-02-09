package code.logic.tamil.ems_backend.mapper;

import code.logic.tamil.ems_backend.dto.EmployeeDto;
import code.logic.tamil.ems_backend.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto toDto(Employee employee) {
        if (employee == null) return null;
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee toEntity(EmployeeDto dto) {
        if (dto == null) return null;
        return new Employee(
                dto.getId(),
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail()
        );
    }
}




