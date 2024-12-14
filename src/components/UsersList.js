//Users
const UsersList = ({ sortedUsersByName, filteredUsers, sortType }) => {
  return (
    <table border="">
      <thead>
        <tr>
          <th>
            <button className="sort-button" onClick={sortedUsersByName}>
              Name {sortType ? "˄" : "˅"}
            </button>
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