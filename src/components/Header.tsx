import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex justify-between b-1 border-blue-600 w-full '>
      <div className='flex justify-center ' >
        <button className="w-[75px] h-[17px] font-montserrat font-semibold text-[14px] leading-[17px] text-[#112211] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          Find Stays
        </button>
        <button className='FindHotel'>
          Find Hotel
        </button>
      </div>
      
      <div className='LOGO' >
        CompanyLogo
      </div>
      <div className='Signupllogin'>
        <button className='login'>
          Login
        </button>
        <button className='signup'>
          Signup
        </button>
      </div>
    </div>
  )
}

export default Header