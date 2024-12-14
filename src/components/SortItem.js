//Sort Inputs
const SortItem = ({ searchEmploye, setSearchEmploye, searchDepartment, setDepartment }) => {
    return (
        <div>
            <input
                className="search-input"
                placeholder="Search Employer"
                value={searchEmploye}
                onChange={(e) => setSearchEmploye(e.target.value)}
            />
            <input
                className="search-input2"
                placeholder="Search Department"
                value={searchDepartment}
                onChange={(e) => setDepartment(e.target.value)}
            />
        </div>
    );
};

export default SortItem;