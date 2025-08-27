import UserProfileCard from "./UserProfileCard";
import "./OurTeam.css";
import sniperAvatar from "./assets/avatars/Sniper.png";

function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
}

const avatars = importAll(require.context("./assets/avatars", false, /\.png$/));

const users = [
  {
    id: 1,
    nickname: "Sniper",
    age: 28,
    avatar: avatars["Sniper.png"],
  },
  // {
  //   id: 2,
  //   nickname: "Mad Dog",
  //   age: 24,
  //   avatar: "https://via.placeholder.com/150", // Zastąp prawdziwym adresem URL obrazu
  // },
  // {
  //   id: 3,
  //   nickname: "Ghost",
  //   age: 31,
  //   avatar: "https://via.placeholder.com/150", // Zastąp prawdziwym adresem URL obrazu
  // },
  // {
  //   id: 4,
  //   nickname: "Iceman",
  //   age: 70,
  //   avatar: "https://via.placeholder.com/150", // Zastąp prawdziwym adresem URL obrazu
  // },
  // {
  //   id: 5,
  //   nickname: "Pjoter",
  //   age: 11,
  //   avatar: "https://via.placeholder.com/150", // Zastąp prawdziwym adresem URL obrazu
  // },
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
