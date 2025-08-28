import UserProfileCard from "./UserProfileCard";
import "./OurTeam.css";

const users = [
  {
    id: 1,
    nickname: "Sniper",
    age: 28,
    avatar: "./assets/avatars/Sniper.jpg",
  },
  {
    id: 2,
    nickname: "Mad Dog",
    age: 17,
    avatar:
      process.env.PUBLIC_URL + "/images/profile_cards/avatars/Mad Dog.jpg",
  },
  {
    id: 3,
    nickname: "Ghost",
    age: 31,
    avatar: process.env.PUBLIC_URL + "/images/profile_cards/avatars/Ghost.png",
  },
  {
    id: 4,
    nickname: "Iceman",
    age: 70,
    avatar: process.env.PUBLIC_URL + "/images/profile_cards/avatars/Iceman.png",
  },
  {
    id: 5,
    nickname: "Pjoter",
    age: 11,
    avatar: process.env.PUBLIC_URL + "/images/profile_cards/avatars/Pjoter.png",
  },
];

const OurTeam = () => {
  return (
    <div className="our_team">
      <h1 className="our_team__title">Nasza ekipa</h1>
      <section className="our_team__container">
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
};

export default OurTeam;

// import sniperAvatar from "./assets/avatars/Sniper.png";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((key) => {
//     images[key.replace("./", "")] = r(key);
//   });
//   return images;
// }

// const avatars = importAll(require.context("./assets/avatars", false, /\.png$/));
