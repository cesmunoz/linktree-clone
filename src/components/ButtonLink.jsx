export const buttonLinks = [
  {
    name: "Twitch",
    link: "https://twitch.tv/cemdev",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/cesmdev",
  },
  {
    name: "Discord",
    link: "https://discord.gg/cesmdev",
  },
  {
    name: "Dev.to",
    link: "https://dev.to/cesmdev",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/cesmdev",
  },
  {
    name: "Tiktok",
    link: "https://tiktok.com/@cesmdev",
  },
  {
    name: "Youtube",
    link: "https://youtube.com/cemdev",
  },
  {
    name: "OnlyFans",
    link: "https://onlyfans.com/cesmdev",
  },
];

const ButtonLink = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-center bg-transparend font-bold border border-white rounded-3xl py-3 hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
