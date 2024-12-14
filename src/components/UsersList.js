import SortItem from "./SortItem";

//Users
const UsersList = ({  filteredUsers, sortType, setSortType, users, setUsers }) => {
  return (
    <table border="">
      <thead>
        <tr>
          <th>
            <SortItem
              sortType={sortType}
              setSortType={setSortType}
              users={users}
              setUsers={setUsers}
            />
          </th>
          <th>Department</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>{user.role}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersList;