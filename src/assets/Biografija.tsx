import React from 'react'

type Props = {
  bioRef: React.RefObject<HTMLDivElement | null>
}


function Biografija({bioRef} : Props) {
  return (
    <div ref = {bioRef}>Biografija</div>
  )
}

export default Biografija