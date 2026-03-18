import React, { useRef } from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import Biografija from './Biografija';
import Izumi from './Izumi';
import Zanimljivosti from './Zanimljivosti';
import Galerija from './Galerija';


function App() {
  const bioRef = useRef<HTMLDivElement>(null);
const izumiRef = useRef<HTMLDivElement>(null);
const factsRef = useRef<HTMLDivElement>(null);
const galerijaRef = useRef<HTMLDivElement>(null);



  return (
    <>
    <Navbar bioRef={bioRef} izumiRef = {izumiRef} factsRef={factsRef} galerijaRef={galerijaRef} />
    <Hero/>
    <div className='mainSection'>
    <Biografija bioRef = {bioRef} />
    <Izumi izumiRef = {izumiRef}/>
    <Zanimljivosti factsRef = {factsRef}/>
    <Galerija galerijaRef = {galerijaRef}/>
     </div>
    </>
  )
}

export default App