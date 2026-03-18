type Props = {
  heroRef: React.RefObject<HTMLDivElement | null>;
};

function Hero({ heroRef }: Props) {
  return (
    <>
      <div ref={heroRef}></div>
      <section className="h-dvh w-full p-10 relative flex flex-col justify-center items-center gap-4 overflow-hidden">
        <img
          src="/BackgroundImage.png"
          alt="background"
          className="backgroundImg hidden md:block"
        />
        <img
          src="/NikolaTesla.png"
          alt="Nikola Tesla"
          className="backgroundNikola  fixed opacity-60 w-3/4 bottom-[50%] transform translate-y-1/2 z-1 md:bottom-0 md:translate-y-0 md:h-[90%] md:w-auto"
        />
        <div className="heroName px-15 w-full lg:w-full ">NIKOLA TESLA</div>
        <h2 className="heroText ">a man who lit the world</h2>
      </section>
    </>
  );
}

export default Hero;
