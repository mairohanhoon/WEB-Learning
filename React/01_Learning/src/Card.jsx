import React from "react";

export default function Card( ) {
  const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/mairohanhoon')
    return response.json()
  }

  return (
    <div className=" w-8/12 p-4 bg-white rounded-lg shadow-md flex justify-center items-center">
      <div className=' w-28 m-4'>
        <img src="https://img.icons8.com/?size=512&id=IerOpHeUt2OH&format=png" alt="profile image" />
      </div>
    <div className='flex items-center justify-center flex-wrap w-3/6'>
        <h1 className='text-2xl font-extrabold p-3'>Rohan Tiwari</h1>
        <p className="p-2 text-center">2⭐ CodeChef(max.1462) | 2⭐LeetCode | 4🏆 College Topper @CodingNinja/Studio Top 0.1%(max.4671) | Member @ GDSC-DITU | 4⭐C++@HackerRank | B.Tech CSE@DITU'26</p>
      </div>
    </div>
  );
} 