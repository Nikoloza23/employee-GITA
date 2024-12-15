import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import UserSearch from './components/UserSearch';
import UsersRegistration from './components/UsersRegistration';
import userData from './data/Data';
import './App.css';

function App() {
  const [users, setUsers] = useState(userData);
  const [sortType, setSortType] = useState(true);
  const [searchEmploye, setSearchEmploye] = useState('');
  const [searchDepartment, setDepartment] = useState('');


  //Take Data From LocalStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('formData')
    if (savedUsers) {
      setUsers([JSON.parse(savedUsers)])
    }
  }, [])

  //Filtered Users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchEmploye.toLowerCase()) &&
      user.department.toLowerCase().includes(searchDepartment.toLowerCase())
  );

  return (
    <div className="employe_container">
      <UsersRegistration setUsers={setUsers} />
      <UserSearch
        searchEmploye={searchEmploye}
        setSearchEmploye={setSearchEmploye}
        searchDepartment={searchDepartment}
        setDepartment={setDepartment}
      />
      <UsersList
        users={users}
        filteredUsers={filteredUsers}
        sortType={sortType}
        setSortType={setSortType}
        setUsers={setUsers}
      />

    </div>
  );
}

export default App;