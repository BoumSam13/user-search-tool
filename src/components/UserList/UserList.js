import './UserList.css';
import User from "../User/User"

const UserList = ({ users }) => {
    return (
        <div className="user-list">
            {users.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </div>
    );
};

export default UserList;