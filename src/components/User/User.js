import './User.css';

const User = ({ user }) => {
    return (
        <div data-testid={`user-${user.userId}`} className="user">
            <img className="user-img" src={user.albumImage} alt={user.albumImageAlt} />
            <div className="user-profile">
                <h3 data-testid={`user-name-${user.userId}`}>{user.name}</h3>
                <p>{user.company}</p>
                <p><a href={user.website} target="_blank" rel="noreferrer">Company Website</a></p>
                <p>{user.totalAlbums} Albums</p>
            </div>
        </div>
    );
};

export default User;