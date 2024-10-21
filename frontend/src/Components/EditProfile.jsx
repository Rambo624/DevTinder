import React, { useState } from 'react'
import { useRef } from 'react'
import useProfile from '../hooks/useProfile'
import axiosInstance from '../utils/axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
function EditProfile() {
    const firstname = useRef()
    const lastname = useRef()
    const gender = useRef()
    const age = useRef()
    const skills = useRef()
    const about = useRef()
    const photo = useRef()
const dispatch=useDispatch()
    const { user, loading, error } = useProfile()
   // console.log(user)
const [successmsg,setSuccessmsg]=useState("")
async function handleSave(){
    const formData = new FormData();
        formData.append('firstname', firstname.current.value);
        formData.append('about', about.current.value);
        formData.append('lastname', lastname.current.value);
        formData.append('gender', gender.current.value);
        formData.append('age', age.current.value);
        formData.append('skills', skills.current.value);
    
        
        if (photo.current.files[0]) {
            formData.append('photo', photo.current.files[0]);
        }
   /* const data={
        firstname:firstname.current.value,
        lastname:lastname.current.value,
        gender:gender.current.value,
        age:age.current.value,
        skills:skills.current.value,
        about:about.current.value,
        photo:photo.current.value,

    }*/
    const response= await axiosInstance({method:"PATCH",url:"/profile/edit",data:formData})
    
   
    if(response.status===200){
        setSuccessmsg("Changes saved successfully")
        dispatch(addUser(response.data.data))
        setTimeout(() => {
            setSuccessmsg("")
        }, 5000);
   
    }
}

    return (
        <div className='flex justify-center mt-20'>
            <div className="card bg-base-100 w-96 shadow-xl mb-20">

                <div className="card-body">
                    <h2 className="card-title">Profile</h2>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="md:label-text text-xs">First Name</span>
                        </div>
                        <input ref={firstname} type="text" defaultValue={user?.firstname} placeholder="Type here" className="border border-gray-700 bg-transparent p-1 text-xs rounded-lg md:input md:input-bordered md:w-full md:max-w-xs" />
                        <div className="label">
                            <span className="md:label-text text-xs">Last Name</span>
                        </div>
                        <input ref={lastname} type="text" defaultValue={user?.lastname} placeholder="Type here" className="border border-gray-700 bg-transparent p-1 text-xs rounded-lg md:input md:input-bordered md:w-full md:max-w-xs" />
                        <div className="label">
                            <span className="md:label-text text-xs">About</span>
                        </div>
                        <textarea ref={about} defaultValue={user?.about} className="border bg-transparent text-xs border-gray-600 rounded-lg p-1 md:textarea md:textarea-bordered" placeholder="Bio"></textarea>
                        <div className="label">
                            <span className="md:label-text text-xs">Age</span>
                        </div>
                        <input ref={age} defaultValue={user?.age} type="number" placeholder="Type here" className="border border-gray-700 bg-transparent p-1 text-xs rounded-lg md:input md:input-bordered md:w-full md:max-w-xs" />
                        <div className="label">
                            <span className="md:label-text text-xs">Skills</span>
                        </div>
                        <input ref={skills} defaultValue={user?.skills} type="text" placeholder="Type here" className="border border-gray-700 bg-transparent p-1 text-xs rounded-lg md:input md:input-bordered md:w-full md:max-w-xs" />
                        <div className="label">
                            <span className="md:label-text text-xs">Photo Url</span>
                        </div>
                        <input ref={photo} defaultValue={user?.photo} type="file" placeholder="Type here" className="border border-gray-700 bg-transparent p-1 text-xs rounded-lg md:input md:input-bordered md:w-full md:max-w-xs" />
                        <div className="label">
                            <span className="md:label-text text-xs">Gender</span>
                        </div>
                        <select
ref={gender}
                            className="border border-gray-700 bg-transparent text-xs rounded-lg md:select md:select-bordered md:w-full md:max-w-xs"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <div className="card-actions justify-center mt-4">
                        <button onClick={handleSave} className="btn btn-primary">Save changes</button>
                    </div>
                    <p>{successmsg}</p>
                </div>
            </div>
        </div>
    )
}

export default EditProfile