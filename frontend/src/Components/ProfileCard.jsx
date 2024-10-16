import React from 'react'

function ProfileCard({data}) {
   console.log(data)
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-10 my-10">
    <figure>
      <img
        src={data[0]?.photo|| data.photo}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{data[0]?.firstname || data.firstname+" "+ data[0]?.lastname || data.lastname}</h2>
      <p>{data[0]?.about|| data.about}</p>
      <div className="card-actions justify-center">
        <button className="btn btn-primary">Interested</button>
        <button className="btn btn-secondary">Ignore</button>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard