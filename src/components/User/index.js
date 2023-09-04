import './index.css';

const User = ({ user }) => {
    return (
        <div className="user">
            <img className="user-img" src={user.albumImage} alt={user.albumImageAlt} />
            <div className="user-profile">
                <h3>{user.name}</h3>
                <p>{user.company}</p>
                <p><a href={user.website} target="_blank" rel="noreferrer">Company Website</a></p>
                <p>{user.totalAlbums} Albums</p>
            </div>
        </div>
    );
};

export default User;