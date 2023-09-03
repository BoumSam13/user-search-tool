import logo from "../../logo.svg";
import './index.css';

const User = ({ user }) => {
    return (
        <div className="user">
            <img className="user-img" src={logo} alt="logo" />
            <div className="user-profile">
                <h3>{user.name}</h3>
                <p>{user.company}</p>
                <p>{user.companyUrl}</p>
                <p>{user.totalAlbums}</p>
            </div>
        </div>
    );
};

export default User;