import React from 'react'

function Pagination() {
  return (
    <div className="join">
    <button  value={1} className="join-item btn">1</button>
    <button value={2} className="join-item btn btn-active">2</button>
    <button value={3} className="join-item btn">3</button>
    <button value={4} className="join-item btn">4</button>
  </div>
  )
}

export default Pagination