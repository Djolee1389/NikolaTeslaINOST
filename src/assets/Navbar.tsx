import React from 'react';

type reference = React.RefObject<HTMLDivElement | null>;

type Props =  {
  bioRef: reference ,
  izumiRef: reference,
  factsRef: reference,
  galerijaRef: reference
}

function Navbar({bioRef, izumiRef, factsRef, galerijaRef} : Props) {

  const clicked = (ref: reference) : void => {
      ref.current?.scrollIntoView({behavior: "smooth",block: "start" })
  }

  return (
   <div className="navbar">
      <li  onClick={() => clicked(bioRef)}>Biografija</li>
      <li onClick={() => clicked(izumiRef)}>Izumi</li>
      <img src='/Logo.png' alt='munja' className = "logo"/>
      <li onClick={() => clicked(factsRef)}>Zanimljivosti</li>
      <li onClick={() => clicked(galerijaRef)}>Galerija</li>
   </div>
  )
}

export default Navbar
