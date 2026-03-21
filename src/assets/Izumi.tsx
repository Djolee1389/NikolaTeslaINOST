import React, { useState } from "react";

type Props = {
  izumiRef: React.RefObject<HTMLDivElement | null>;
};

const izumi = [
  {
    id: 1,
    name: "Teslin kalem",
    img: "/TeslinKalem.jpg",
    year: 1891,
    desc: "Visokonaponski transformator koji proizvodi struje visokih frekvencija i napona, korišten za eksperimente sa bežičnim prenosom energije.",
  },
  {
    id: 2,
    name: "Naizmjenična struja (AC sistem)",
    img: "/ACsistem.jpg",
    year: 1888,
    desc: "Sistem prenosa električne energije na velike udaljenosti uz minimalne gubitke, osnova moderne elektroenergetske mreže.",
  },
  {
    id: 3,
    name: "Indukcioni motor",
    img: "/IndukcioniMotor.jpg",
    year: 1887,
    desc: "Motor koji koristi obrtno magnetno polje za rad bez četkica, pouzdan i široko korišten u industriji.",
  },
  {
    id: 4,
    name: "Bežični prenos energije",
    img: "/BezicniPrenos.jpg",
    year: 1893,
    desc: "Koncept prenosa električne energije bez žica putem elektromagnetnih talasa.",
  },
  {
    id: 5,
    name: "Radio tehnologija",
    img: "/RadioPrijemnik.jpg",
    year: 1897,
    desc: "Osnova bežične komunikacije putem elektromagnetnih talasa, korištena za prenos signala na daljinu.",
  },
  {
    id: 6,
    name: "Teslina turbina",
    img: "/Turbina.jpg",
    year: 1913,
    desc: "Turbina bez lopatica koja koristi viskoznost fluida za pokretanje rotora.",
  },
  {
    id: 7,
    name: "Fluorescentno osvjetljenje",
    img: "/Fluorescentno.jpg",
    year: 1891,
    desc: "Efikasno osvjetljenje koje koristi gas i električno pražnjenje za proizvodnju svjetlosti.",
  },
  {
    id: 8,
    name: "Daljinsko upravljanje",
    img: "/RCbrod.jpg",
    year: 1898,
    desc: "Prvi sistem za upravljanje uređajima na daljinu pomoću radio signala.",
  },
  {
    id: 9,
    name: "Teslina kugla",
    img: "/Kugla.jpg",
    year: 1894,
    desc: "Staklena kugla ispunjena gasom koja prikazuje električna pražnjenja nastala djelovanjem visokofrekventne struje.",
  },
  {
    id: 10,
    name: "X-zraci eksperimenti",
    img: "/Xzraci.jpg",
    year: 1895,
    desc: "Rani eksperimenti sa rendgenskim zracima i njihovom primjenom u medicini i nauci.",
  },
];

function Izumi({ izumiRef }: Props) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [pressed, setIsPressed] = useState(false);

  const changePic = (znak: number) => {
    setTimeout(() => {
      setIndex((prev) => (prev + znak + izumi.length) % izumi.length);
    }, 400);
  };

  return (
    <section>
      <div ref={izumiRef} className="scroll-link"></div>
      <section className="relative left-1/2 transform translate-x-[-50%]">
        <div className="naslov md:ml-20 ml-10">Izumi</div>
        <div className="md:text-base md:w-50 md:mt-5 md:ml-20 w-80 ml-10">
          Nikola Tesla razvio je brojne inovacije u oblasti električne energije,
          elektromagnetizma i bežičnog prenosa energije.
        </div>
        <div className="scroll text-sm md:hidden opacity-50  relative w-95 pr-5 text-right">
          Tap/Swipe
        </div>

        <div className="izumiImages m-auto h-110 md:w-150 relative lg:top-[-100px]">
          <div
            className="relative w-full h-[90%] perspective-1000 mx-auto left-1/2 transform translate-x-[-50%] "
            onTouchStart={(e) => {
              if(window.innerWidth < 768){
              setTouchStartX(e.touches[0].clientX);
              }
            }}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const touchEndX = e.changedTouches[0].clientX;
              const deltaX = touchEndX - touchStartX;

              if (deltaX > 50) changePic(-1);
              else if (deltaX < -50) changePic(1);

              setTouchStartX(null);
            }}
            onClick={(e) => {
              if (window.innerWidth < 768) {
                const x = e.nativeEvent.offsetX;
                if (x > window.innerWidth / 2) {
                  changePic(1);
                } else {
                  changePic(-1);
                }
              }
            }}
          >
            {izumi.map((item, i) => {
              const pos = (i - index + izumi.length) % izumi.length;

              let className =
                "md:absolute relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500";

              if (pos === 0)
                className += `rotate-y-0 scale-170 md:max-w-80 z-30 max-w-50 max-h-50 ${pressed ? "scale-150" : "scale-170"}`; // centralna
              else if (pos === 1 || pos === -izumi.length + 1)
                className +=
                  " rotate-y-[25deg] translate-x-[20%] scale-90 max-w-80 z-20 opacity-70 hidden md:block"; // desna
              else if (pos === izumi.length - 1 || pos === -1)
                className +=
                  " -rotate-y-[25deg] -translate-x-[90%] scale-90 max-w-90 z-20 opacity-70 hidden md:block"; // lijeva
              else if (pos === 2 || pos === izumi.length - 2)
                className +=
                  " translate-x-[-20%] scale-75 z-10 opacity-50 max-w-0"; // pozadinske desno/lijevo
              else className += " scale-70 z-0 opacity-0 max-w-0"; // daleke pozadinske

              return (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.name}
                  className={className + " rounded-lg shadow-lg"}
                  onTouchStart={() => setIsPressed(true)} // dodir počinje
                  onTouchEnd={() => setIsPressed(false)}
                />
              );
            })}
          </div>
          <div
            className="leftCircle rounded-full hidden md:block radius-[50%] bg-white w-7 h-7 md:w-12 md:h-12 md:top-1/2 md:absolute left-[-20%] cursor-pointer"
            onClick={() => changePic(1)}
          ></div>
          <div
            className={`rightCircle rounded-full hidden md:block bg-white md:w-12 md:h-12 w-7 h-7 md:top-1/2 md:absolute md:right-[-20%] cursor-pointer`}
            onClick={() => changePic(-1)}
          ></div>
          <div className="infoIzum relative">
            <div className="nazivIzuma left-1/2 transform -translate-x-1/2 relative md:text-xl text-center">
              <b>{izumi[index].name}</b>
            </div>
            <div className="godinaIzuma opacity-70 left-1/2 transform -translate-x-1/2 relative text-center">
              Godina: {izumi[index].year}
            </div>
            <div className="izumText relative text-center w-90 left-1/2 transform -translate-x-1/2">
              {izumi[index].desc}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Izumi;
