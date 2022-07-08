import React from "react";
import mainContent from "../MainContent.module.scss";

import s from "./RightSidebar.module.scss";

import "../../shared/ProfileInfo/ProfileInfoVertical";
import ProfileInfoVertical from "../../shared/ProfileInfo/ProfileInfoVertical";
import profilePic1 from "../../../assets/profilePic1.jpg";
import profilePic2 from "../../../assets/profilePic2.jpg";
import profilePic3 from "../../../assets/profilePic3.jpg";
import profilePic4 from "../../../assets/profilePic4.jpg";

export default function RightSidebar() {
  return (
    <div className={mainContent.right}>
      <Announcements />
      <Trending />
    </div>
  );
}

const Announcements = () => (
  <div className={s.section}>
    <div className={mainContent.sectionHeading}>Announcements</div>
    <div className={s.cards}>
      <Announcement heading="Site Maintenance">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Announcement>
      <Announcement heading="This is an announcement.">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi placeat
        aliquid iste consectetur eos reprehenderit!
      </Announcement>
      <Announcement heading="Hello there.">
        Lorem ipsum dolor sit amet.
      </Announcement>
    </div>
  </div>
);

function Announcement({ heading, children }) {
  return (
    <div className={s.Announcement}>
      <div className={s.AnnouncementHeading}>{heading}</div>
      <div className={s.AnnouncementText}>{children}</div>
    </div>
  );
}

const Trending = () => (
  <div className={s.section}>
    <div className={mainContent.sectionHeading}>Trending</div>
    <div className={s.cards}>
      <ProfileInfoVertical
        size="small"
        avatar={profilePic2}
        top="@grilled_sausage"
        bottom="Sunday BBQ"
      />
      <ProfileInfoVertical
        size="small"
        avatar={profilePic3}
        top="@domeetee"
        bottom="Why Not Me"
      />
      <ProfileInfoVertical
        size="small"
        avatar={profilePic4}
        top="@notacat"
        bottom="Unraveling the Yarn"
      />
      <ProfileInfoVertical
        size="small"
        avatar={profilePic1}
        top="@piotrnajda3000"
        bottom="Awesome Possum"
      />
    </div>
  </div>
);
