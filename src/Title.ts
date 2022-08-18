import { useLocation } from "@solidjs/router";
import { allGames } from "../Games";

const titles = {
  "/": () => "Radon Games",
  "/games": () => "Games - Radon Games",
  "/apps": () => "Apps - Radon Games",
  "/services": () => "Services - Radon Games",
  "/partners": () => "Partners - Radon Games",
  "/supporters": () => "Supporters - Radon Games",
  "/settings": () => "Settings - Radon Games",
  "/changelog": () => "Changelog - Radon Games",
  "/privacy": () => "Privacy - Radon Games",
  "/game-request": () => "Game Request - Radon Games",
  "/bug-report": () => "Bug Report - Radon Games",
  "/game/": () => {
    let location = useLocation();
    let title = allGames.find(x => ("/game/"+x.route) === location.pathname).title;
    return (title + " - Radon Games") || "Radon Games";
  }
};

export default function () {
  let location = useLocation();
  let title = "Radon Games";
  Object.keys(titles).forEach(key => {
    if (location.pathname.startsWith(key)) {
      title = titles[key]();
    }
  });
  return title;
}
