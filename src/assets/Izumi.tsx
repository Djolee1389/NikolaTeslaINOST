import React from 'react'

type Props = {
  izumiRef: React.RefObject<HTMLDivElement | null>
}

function Izumi({izumiRef} : Props) {
  return (
    <div ref = {izumiRef} >Izumi</div>
  )
}

export default Izumi