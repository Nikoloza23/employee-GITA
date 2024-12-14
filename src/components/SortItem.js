//Sort Users By Name
const SortItem = ({ sortType, setSortType, users, setUsers }) => {
  const sortedUsersByName = () => {
    const sortedUsers = [...users].sort((a, b) =>
      sortType ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setUsers(sortedUsers);
    setSortType(!sortType);
  };

  return (
    <button className="sort-button" onClick={sortedUsersByName}>
      Name {sortType ? "˄" : "˅"}
    </button>
  );
};

export default SortItem;