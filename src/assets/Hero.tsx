type Props = {
  heroRef: React.RefObject<HTMLDivElement | null>;
};

function Hero({ heroRef }: Props) {
  return (
    <>
      <div ref={heroRef} className="scroll-link"></div>
      <section
        className="w-full h-[90vh] relative flex flex-col justify-center items-center overflow-hidden "
        id="first"
      >
        <img
          src="/BackgroundImage.png"
          alt="background"
          className="bcg-animation h-full w-full fixed  top-0 opacity-65 -z-1 hidden md:block"
        />
        <img
          src="/NikolaTesla.png"
          alt="Nikola Tesla"
          className="bcg-animation  fixed opacity-65 w-2/3  bg-red-60  z-1  md:w-1/2 lg:w-1/3"
        />
        {/* <div className="fixed  w-full h-full flex flex-col  z-0 justify-center items-center gap-60 bg-green-80">
        </div> */}
        <div className="heroName text-center mb-[65%] md:mb-[45%] lg:mb-[30%] px-5 w-full z-0 ">
          NIKOLA TESLA
        </div>
        <h2 className="heroText z-3 text-xs">a man who lit the world</h2>
      </section>
    </>
  );
}

export default Hero;
