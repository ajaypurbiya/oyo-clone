/* eslint-disable @next/next/no-img-element */
'use client'

const Header4 = () => {
  return (
    <div className="flex my-14 justify-between items-center border-2 rounded-lg border-gray-300 px-5 ">
      <div className=" flex items-center">
        <img 
           src={'/fire.jpg'}
           alt="fire"
           width={200}
           height={200}
           className=" w-32 h-32 rounded-full mr-5"
        />
        <div className=" text-xl">
          <p className=" font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>      
      </div>
      <div className="flex">
        <input 
          type="email" 
          className=" px-6 py-3 rounded-lg mr-5 w-48 h-16 outlline-none border  border-gray-300" 
          placeholder="e.g. john@gmail.com" 
        />
        <button 
          type="submit" 
          className="w-24 h-16 bg-red-500 text-xl text-white cursor-pointer rounded-lg ">Notify
        </button>
      </div>
    </div>
  )
}

export default Header4