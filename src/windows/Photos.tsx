import { WindowControls } from "@components";
import { gallery, photosLinks } from "@constants";
import { WindowWrapper } from "@hoc";
import { useWindowStore } from "@store";
import clsx from "clsx";
import { Mail, Search } from "lucide-react";


const Photos = () => {
  const activeId = 1;
  const openWindow = useWindowStore((state) => state.openWindow);
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <p className=" font-semibold text-gray-500">Photos</p>
        <div className="flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>
      <div className="flex h-full bg-white">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li
                key={link.id}
                // onClick={() => setActiveId(link.id)}
                className={clsx(
                  activeId === link.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-200"
                )}
              >
                <img src={link.icon} alt={link.title} />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery scroll-style overflow-y-auto flex-1">
          <ul>
            {gallery.map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  openWindow("imgfile", {
                    name: item?.id ?? "image",
                    imageUrl: item.img,
                  })
                }
              >
                <img src={item.img} alt="gallery" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WindowWrapper(Photos, "photos");
