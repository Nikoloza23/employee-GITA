import { useState } from "react";


//User Registration using Hook-Form
const UserRegistration = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    role: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Name is required and must be at least 3 characters';
      isValid = false;
    }

    if (!formData.department || formData.department.trim().length < 2) {
      newErrors.department = 'Department is required and must be at least 2 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('userFormData', JSON.stringify(formData));
      setUsers((prevUsers) => [...prevUsers, formData]);
      console.log(formData)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Name: <input className="registrer-input" type="text" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      Department: <input className="registrer-input" type="text" name="department" value={formData.department} onChange={handleChange} />
      {errors.department && <p style={{ color: 'red' }}>{errors.department}</p>}
      Role: <input className="registrer-input" type="text" name="role" value={formData.role} onChange={handleChange} />
      <button type="submit">Submit</button>
      <hr />
    </form>
  );
};

export default UserRegistration;