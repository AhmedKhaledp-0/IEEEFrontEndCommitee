import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil ,faTrash } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({user}) => {
  const [isActive, setIsActive] = useState(false);

    const {
        name,
        role,
        committee,
        year,
        faculty,
        gender,
        gov,
        birth,
        phone,
        email
      }=user;

  return ( 
    <>
    <div className="relative group">
  {/* Product Row (white box) */}
  <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr_1.7fr_1fr_1fr_1fr_1fr_1.7fr] gap-3 items-center bg-white shadow-sm py-3 pl-4 hover:bg-gray-50 transition">
    <div className="font-semibold">{name}</div>
    <div className="text-sm font-medium text-gray-700">{role}</div>
    <div className="text-sm text-gray-700">{committee}</div>
    <div className="text-sm text-gray-700">{year}</div>
    <div className="text-sm text-gray-700">{faculty}</div>
    <div className="text-sm text-gray-700">{gender}</div>
    <div className="text-sm text-gray-700">{gov}</div>
    <div className="text-sm text-gray-700">{birth}</div>
    <div className="text-sm text-gray-700">{phone}</div>
    <div className="text-sm text-gray-700 ml-4">{email}</div>
  </div>

  <div className="absolute top-1/2 right-[-5.5rem] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon icon={faPencil} className="text-[#d6d6d6] hover:text-gray-500 cursor-pointer " />
    <FontAwesomeIcon icon={faTrash} className="text-[#d6d6d6] hover:text-gray-500 cursor-pointer" />

    {/* Switch button */}
    <button
      onClick={() => setIsActive(!isActive)}
      className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
        isActive ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isActive ? 'translate-x-5' : ''
        }`}
      ></div>
    </button>
  </div>
</div>

</div>
</>
  );
};

export default ListItem;
