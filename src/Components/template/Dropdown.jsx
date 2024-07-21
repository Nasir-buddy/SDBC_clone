import React from 'react'

const Dropdown = ({ title, options }) => {
    return (
        <div class="w-64">
    <select id="dropdown" class="block w-full px-4 py-2 text-white bg-zinc-700 border border-none rounded-md shadow-sm focus:outline-none focus:ring-2 ">
      <option  value="" disabled>{title}</option>
        {options.map((item, index)=>(
            <option  value={0}>{item.toUpperCase()}</option>
        ))}
    </select>
  </div>
    )
}

export default Dropdown