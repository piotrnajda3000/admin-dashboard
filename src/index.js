import "./scss/main.scss";

if (module.hot) {
  module.hot.accept();
}

/* Add some avatars to fake people */

const [...avatars] = document.querySelectorAll("[data-id]");

import profilePic1 from "./assets/profilePic2.jpg";
import profilePic2 from "./assets/profilePic3.jpg";
import profilePic3 from "./assets/profilePic4.jpg";

let profilePics = [profilePic1, profilePic2, profilePic3];

let count = 0;
avatars.forEach((avatar) => {
  avatar.src = profilePics[count];
  count++;
});
