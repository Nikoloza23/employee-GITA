import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import SortItem from './components/SortItem';
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

  //Sort Users By Name
  const sortedUsersByName = () => {
    const sortedUsers = [...users].sort((a, b) =>
      sortType ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setUsers(sortedUsers);
    setSortType(!sortType);
  };

  //Filtered Users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchEmploye.toLowerCase()) &&
      user.department.toLowerCase().includes(searchDepartment.toLowerCase())
  );

  return (
    <div className="employe_container">
      <UsersRegistration setUsers={setUsers} />
      <SortItem
        searchEmploye={searchEmploye}
        setSearchEmploye={setSearchEmploye}
        searchDepartment={searchDepartment}
        setDepartment={setDepartment}
      />
      <UsersList
        users={users}
        sortedUsersByName={sortedUsersByName}
        filteredUsers={filteredUsers}
        sortType={sortType}
      />
    </div>
  );
}

export default App;