import React from "react";
import { useIntl } from "react-intl";
import { gallery } from "../data";
import GalleryImage from "../components/GalleryImage";

type Props = {
  galerijaRef: React.RefObject<HTMLDivElement | null>;
};

function Galerija({ galerijaRef }: Props) {
  const intl = useIntl();

  return (
    <section>
      <div ref={galerijaRef} className="scroll-link mb-20"></div>
      <section className="flex items-stretch justify-center gap-0 px-10">
        <div className="d-grid w-[70%] h-150 overflow-auto border-solid border-t-2 border-b-2 border-white mb-100 galerijaScroll">
          {gallery.map((item, index) => (
            <GalleryImage key={index} item={item} />
          ))}
        </div>
        <div className="naslov flex flex-col justify-center relative p-5 bg-white h-150 m-0 text-black uppercase">
          {intl
            .formatMessage({ id: "navbar.galerija" })
            .split("")
            .map((char, index) => {
              return <div className="text-center" key ={index}>{char}</div>
            })}
            
        </div>
      </section>
    </section>
  );
}

export default Galerija;
