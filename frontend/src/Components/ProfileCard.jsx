import React from 'react';
import axiosInstance from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

function ProfileCard({ data }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);


  const userId = user?._id || user?.data?._id;
 // console.log(userId, "user");

 
  const profileData = Array.isArray(data) ? data[0] : data;
  

  async function handleReview(status, id) {
    try {
      const response = await axiosInstance({
        method: 'POST',
        url: `/request/send/${status}/${id}`,
      });

      
        dispatch(removeUserFromFeed(id));
      
    } catch (error) {
      console.error('Failed to send review:', error);
    }
  }

  if (!user) return <h1>Loading...</h1>;

  return (
    <div className="card bg-base-100 md:w-96 w-60 shadow-xl mt-10 my-10">
      <figure>
        <img src={profileData?.photo} alt="Profile" />
      </figure>
      <div className="card-body">
        <h2 className="md:card-title  text-small">
          {profileData?.firstname || ""} {profileData?.lastname || ""}
        </h2>
        <p className='md:text-base text-small'>{profileData?.about || ""}</p>
        <div className="card-actions justify-center">
          {userId !== profileData?._id && (
            <>
              <button
                onClick={() => handleReview('Interested', profileData._id)}
                className="md:btn bg-primary p-3 rounded-lg md:text-base text-xs btn-primary"
              >
                Interested
              </button>
              <button
                onClick={() => handleReview('Ignored', profileData._id)}
                className="md:btn bg-secondary p-3 rounded-lg md:text-base text-xs btn-secondary"
              >
                Ignore
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
