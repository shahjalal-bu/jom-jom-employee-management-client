import Image from "next/image";
import Link from "next/link";
import React from "react";
const Card = ({ name, role, id, photo }) => {
  return (
    <div className="p-2 rounded shadow-sm">
      <div className="flex items-center space-x-3 shadow py-2 px-3 rounded">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            
            <Image src={photo?`https://drive.google.com/uc?id=${photo}`:"https://daisyui.com/tailwind-css-component-profile-2@56w.png"} height={100} width={100} alt="avator"></Image>
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{role}</div>
        </div>
      </div>
      <Link href={`/employee/${id}`} className="btn btn-block neutral">
        Details
      </Link>
    </div>
  );
};

export default Card;
