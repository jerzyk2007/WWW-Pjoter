// src/utils/avatarLoader.js

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace(".png", "")] = r(item);
  });
  return images;
};

// require.context(directory, useSubdirectories, regExp)
// directory: folder, z którego chcesz importować
// useSubdirectories: czy skanować podfoldery
// regExp: wyrażenie regularne dopasowujące pliki (np. /\.jpg$/ dla plików JPG)
const avatars = importAll(
  require.context("../assets/avatars", false, /\.png$/)
);

export default avatars;
