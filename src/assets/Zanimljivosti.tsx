import React from 'react'

type Props = {
  factsRef: React.RefObject<HTMLDivElement | null>
}

function Zanimljivosti({factsRef} : Props) {
  return (
    <div ref = {factsRef}>Zanimljivosti</div>
  )
}

export default Zanimljivosti