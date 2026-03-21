import { brojIzuma } from "../data";

export const BrojIzuma = () => {
  return (
    <>
      <div className="w-full h-full text-black flex justify-around items-center">
        {brojIzuma.map((item, i) => (
          <div
            key={i}
            className=" w-content h-full  flex items-center justify-center flex-col"
          >
            <span className=" text-md md:text-2xl lg:text-3xl font-bold">
              {item.title}
            </span>
            <p className="text-sm text-center md:text-md lg:text-lg text-(--subtext)">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
