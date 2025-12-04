import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, NavBar, Welcome } from "@components";
import { Resume, Safari, Terminal } from "@windows";

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
      <Resume />
    </main>
  );
};

export default App;