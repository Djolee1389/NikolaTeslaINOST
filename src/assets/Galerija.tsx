import React from 'react'

type Props = {
    galerijaRef: React.RefObject<HTMLDivElement | null>;
}

function Galerija({galerijaRef} : Props) {
  return (
    <section><div ref = {galerijaRef}>Galerija</div></section>
  )
}

export default Galerija