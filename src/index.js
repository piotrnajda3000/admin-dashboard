import "./scss/style.scss";

const [...avatars] = document.querySelectorAll("[data-id]");

import profilePic1 from "./assets/profilePic2.jpg";
import profilePic2 from "./assets/profilePic3.jpg";

let profilePics = [profilePic1, profilePic2];

let count = 0;
avatars.forEach((avatar) => {
  avatar.src = profilePics[count];
  count++;
});

if (module.hot) {
  module.hot.accept();
}