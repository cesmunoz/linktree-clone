import { FiMail, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaTiktok, FaTwitch } from "react-icons/fa";
import { SlSocialSpotify, SlSocialLinkedin } from "react-icons/sl";
import { SiOnlyfans } from "react-icons/si";

export const iconLinks = [
  {
    icon: <FiTwitter />,
    link: "https://twitter.com/cesmdev",
  },
  {
    icon: <FiInstagram />,
    link: "https://instagram.com/cesmdev",
  },
  {
    icon: <FaTiktok />,
    link: "https://tiktok.com/@cesmdev",
  },
  {
    icon: <SlSocialSpotify />,
    link: "https://spotify.com/@cesmdev",
  },
  {
    icon: <FiYoutube />,
    link: "https://youtube.com/cemdev",
  },
  {
    icon: <SlSocialLinkedin />,
    link: "https://linkedin.com/in/cesmdev",
  },
  {
    icon: <FaTwitch />,
    link: "https://twitch.tv/cemdev",
  },
  {
    icon: <FiMail />,
    link: "mailto:cesmdev@gmail.com",
  },
  {
    icon: <SiOnlyfans />,
    link: "https://onlyfans.com/cesmdev",
  },
];

const IconLink = ({ icon, link }) => {
  return (
    <a href={link} className="w-4">
      {icon}
    </a>
  );
};

export default IconLink;
