import React, { useState, useEffect } from "react";
import axios from "axios";
// import { masterUrls } from "../constants/API_ENDPOINTS";
import ListItem from "../components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas ,faFilter ,faPlus} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'; 
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, far);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(masterUrls.allUsers);
//         console.log(response);
//         setUsers(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading)
//     return <p>loading....</p>
//   if (error)
//     return <p>Error: {error}</p>

const Users=[{
    name: "First Middle Last",
    role: "Head",
    committee:"Frontend",
    year: "First",
    faculty: "Computers and Artificial Intelligence",
    gender: "Female",
    gov: "Beni Suef",
    birth: "1/1/1000",
    phone: "01000000000",
    email:"email.example.tech"
  } ,
  {
    name: "First Middle Last",
    role: "Member",
    committee:"Backend",
    year: "First",
    faculty: "Computers and Artificial Intelligence",
    gender: "Female",
    gov: "Beni Suef",
    birth: "1/1/1000",
    phone: "01000000000",
    email:"email.example.tech"
  }];


  return (
    <>
    <div className="mt-24 pl-4 pr-23" >
      <div className="mb-6">
      <h2 className="text-2xl font-bold inline">All Users</h2>
      <div className="float-right">
      <div className="relative inline mr-2">
        <input type="text"className="border border-gray-300 rounded bg-white px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 float-r"/>
        <FontAwesomeIcon icon={['fas', 'search']} className="absolute right-1 top-1 text-[#d6d6d6]"/>
      </div>
        <FontAwesomeIcon icon={faFilter} className="text-[#d6d6d6]"/>
        <div className="bg-white border border border-gray-300 rounded inline-block ml-2 px-0.5">
        <FontAwesomeIcon icon={faPlus} className="text-[#d6d6d6]"/>
        </div>
      </div> 
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-[2fr_1fr_1.3fr_1fr_2fr_1.2fr_1.2fr_1.3fr_1.3fr_1.5fr] text-gray-500 text-sm font-semibold mb-2 px-3">
        <div>Name</div>
        <div>Role</div>
        <div>Committee</div>
        <div>Year</div>
        <div>Faculty</div>
        <div>Gender</div>
        <div>Gov</div>
        <div>Birth</div>
        <div>phone</div>
        <div>Email</div>
        
      </div>
    <div>
    {Users.map((user, index) => {
        return <ListItem key={index} user={user} />;
      })}
      </div>

      </div>
    </>
  )
}

export default Users