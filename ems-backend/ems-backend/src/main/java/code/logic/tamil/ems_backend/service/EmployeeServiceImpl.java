package code.logic.tamil.ems_backend.service;

import code.logic.tamil.ems_backend.dto.EmployeeDto;
import code.logic.tamil.ems_backend.entity.Employee;
import code.logic.tamil.ems_backend.exception.ResoureNotFoundException;
import code.logic.tamil.ems_backend.mapper.EmployeeMapper;
import code.logic.tamil.ems_backend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.toEntity(employeeDto);
        Employee saved = employeeRepository.save(employee);
        return EmployeeMapper.toDto(saved);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(EmployeeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResoureNotFoundException("Employee not found with id: " + id));
        return EmployeeMapper.toDto(employee);
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResoureNotFoundException("Employee not found with id: " + id));

        existingEmployee.setFirstName(employeeDto.getFirstName());
        existingEmployee.setLastName(employeeDto.getLastName());
        existingEmployee.setEmail(employeeDto.getEmail());

        Employee updated = employeeRepository.save(existingEmployee);
        return EmployeeMapper.toDto(updated);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResoureNotFoundException("Employee not found with id: " + id));
        employeeRepository.delete(existingEmployee);
    }
}





