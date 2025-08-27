import "./UserProfileCard.css";

const UserProfileCard = ({ user }) => {
  console.log(user.avatar);
  return (
    <div className="card">
      <div className="card-header">
        <img
          // src={user.avatar}
          src="/profile_cards/avatars/Sniper.png"
          alt={`${user.nickname} avatar`}
          className="avatar"
        />
      </div>
      <div className="card-body">
        <h2 className="nickname">{user.nickname}</h2>
        <p className="age">{user.age} lat</p>
        <div className="paint-splatter"></div>
      </div>
    </div>
  );
};

export default UserProfileCard;
