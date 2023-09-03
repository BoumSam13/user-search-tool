import './index.css';
import User from "../User"

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