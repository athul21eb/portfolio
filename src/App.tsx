import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, NavBar, Welcome } from "@components";
import { Finder, Resume, Safari, Terminal } from "@windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>

      <NavBar />

      <Welcome />
      <Dock />

    {/* windows */}
      <Terminal />
      <Safari />
      <Finder />
      <Resume />

    </main>
  );
};

export default App;