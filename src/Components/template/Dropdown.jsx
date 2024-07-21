import React from 'react'

const Dropdown = ({ title, options }) => {
    return (
        <div className="w-64">
    <select id="dropdown" className="block w-full px-4 py-2 text-white bg-zinc-700 border border-none rounded-md shadow-sm focus:outline-none focus:ring-2 ">
      <option  value="" disabled>{title}</option>
        {options.map((item, index)=>(
            <option key={index} value={0}>{item.toUpperCase()}</option>
        ))}
    </select>
  </div>
    )
}

export default Dropdown