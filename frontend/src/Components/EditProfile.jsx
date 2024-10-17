import React, { useState } from 'react'
import { useRef } from 'react'
import useProfile from '../hooks/useProfile'
import axiosInstance from '../utils/axios'
import { useDispatch } from 'react-redux'
function EditProfile() {
    const firstname = useRef()
    const lastname = useRef()
    const gender = useRef()
    const age = useRef()
    const skills = useRef()
    const about = useRef()
    const photo = useRef()

    const { user, loading, error } = useProfile()
   // console.log(user)
const [successmsg,setSuccessmsg]=useState("")
async function handleSave(){
    const data={
        firstname:firstname.current.value,
        lastname:lastname.current.value,
        gender:gender.current.value,
        age:age.current.value,
        skills:skills.current.value,
        about:about.current.value,
        photo:photo.current.value,

    }
    const response= await axiosInstance({method:"PATCH",url:"/profile/edit",data:data})
    console.log(response)
   
    if(response.status===200){
        setSuccessmsg("Changes saved successfully")
        setTimeout(() => {
            setSuccessmsg("")
        }, 5000);
        onProfileChange()
    }
}

    return (
        <div className='flex justify-center mt-20'>
            <div className="card bg-base-100 w-96 shadow-xl mb-20">

                <div className="card-body">
                    <h2 className="card-title">Profile</h2>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">First Name</span>
                        </div>
                        <input ref={firstname} type="text" defaultValue={user?.firstname} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text">Last Name</span>
                        </div>
                        <input ref={lastname} type="text" defaultValue={user?.lastname} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text">About</span>
                        </div>
                        <textarea ref={about} defaultValue={user?.about} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                        <div className="label">
                            <span className="label-text">Age</span>
                        </div>
                        <input ref={age} defaultValue={user?.age} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text">Skills</span>
                        </div>
                        <input ref={skills} defaultValue={user?.skills} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text">Photo Url</span>
                        </div>
                        <input ref={photo} defaultValue={user?.photo} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text">Gender</span>
                        </div>
                        <select
ref={gender}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <div className="card-actions justify-center">
                        <button onClick={handleSave} className="btn btn-primary">Save changes</button>
                    </div>
                    <p>{successmsg}</p>
                </div>
            </div>
        </div>
    )
}

export default EditProfile