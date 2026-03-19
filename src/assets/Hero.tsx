type Props = {
  heroRef: React.RefObject<HTMLDivElement | null>;
};

function Hero({ heroRef }: Props) {
  return (
    <>
      <div ref={heroRef} className="h-[10vh] "></div>
      <section className="w-full h-[90vh] relative flex justify-center items-center overflow-hidden " id="first">
        <img
          src="/BackgroundImage.png"
          alt="background"
          className="bcg-animation h-full w-full fixed  top-0 opacity-80 -z-1 hidden md:block"
        />
        <img
          src="/NikolaTesla.png"
          alt="Nikola Tesla"
          className="bcg-animation  fixed opacity-60 w-3/5  bg-red-60  z-1  md:w-1/3"
        />
        <div className="fixed  w-full h-full flex flex-col justify-center items-center gap-60 bg-green-80">
          <div className="heroName px-5 w-full">NIKOLA TESLA</div>
          <h2 className="heroText ">a man who lit the world</h2>
        </div>
      </section>
    </>
  );
}

export default Hero;
