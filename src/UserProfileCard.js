import avatars from "./utils/avatarLoader";
import "./UserProfileCard.css";

const UserProfileCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={avatars[user.nickname]}
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
// src={user.avatar}
