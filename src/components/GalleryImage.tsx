import { useIntl } from "react-intl";
import useIsVisible from "./useInView";

function GalleryImage({
  item,
}: {
  item: { id: number; naziv: string; text: string; img: string };
}) {
  const intl = useIntl();
  const [ref, isVisible] = useIsVisible({ threshold: 0.5 });

  return (
    <div className="flex md:flex-row  flex-col  md:mb-5 mb-15 border-b-2 pb-5 items-center justify-between w-full overflow-hidden ">
        <img
          src={item.img}
          alt={item.naziv}
          className="md:w-2/5 w-90 max-h-110 "
        />
      <div
        className={`text-right md:pr-5 relative right-0 bottom-0 h-min w-full my-5 md:w-[30%] p-0 flex flex-col justify-end gap-2 mb-0 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} transition-all duration-700 ease-out`}
        ref={ref}
      >
        <h3 className="font-bold">
          {intl.formatMessage({
            id: "gallery." + item.naziv.toLocaleLowerCase() + ".name",
          })}
        </h3>
        <p>
          {intl.formatMessage({
            id: "gallery." + item.naziv.toLocaleLowerCase() + ".text",
          })}
        </p>
      </div>
    </div>
  );
}

export default GalleryImage;
