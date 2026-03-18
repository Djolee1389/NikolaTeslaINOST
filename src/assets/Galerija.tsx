import React from 'react'

type Props = {
    galerijaRef: React.RefObject<HTMLDivElement | null>;
}

function Galerija({galerijaRef} : Props) {
  return (
    <div ref = {galerijaRef}>Galerija</div>
  )
}

export default Galerija