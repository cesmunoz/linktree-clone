import "./App.css";

import ButtonLink, { buttonLinks } from "./components/ButtonLink";
import IconLink, { iconLinks } from "./components/IconLink";

function App() {
  return (
    <div className="min-w-full min-h-screen h-96">
      <div className="w-full h-full bg-gradient-to-b from-purple-300 to-purple-900">
        <div className="mx-auto items-center flex flex-col h-full gap-4">
          <img
            className="rounded rounded-full w-24 mt-4"
            src="https://d1fdloi71mui9q.cloudfront.net/Wke7rMPWSkWuLyHnST32_e5FAx2dYrU76cjum"
            alt="cemdev"
          />
          <span className="text-white font-bold font-sans">@cemdev</span>
          <span className="text-white font-sans px-5">
            Software Developer || Always learning and building cool stuff
          </span>
          <div className="flex gap-4 text-white">
            {iconLinks.map((iconLink, index) => (
              <IconLink key={index} link={iconLink.link} icon={iconLink.icon} />
            ))}
          </div>
          <div className="flex gap-4 text-white flex-col mt-4 min-w-full px-4 justify-center items-center">
            {buttonLinks.map((item, index) => (
              <ButtonLink key={index} link={item.link}>
                {item.name}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
