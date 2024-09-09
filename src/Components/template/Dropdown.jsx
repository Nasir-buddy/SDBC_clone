import React from 'react';

const Dropdown = ({ title, options, func }) => {
    return (
        <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <label htmlFor="dropdown" className="sr-only">
                {title}
            </label>
            <div className="relative">
                <select
                    id="dropdown"
                    onChange={func}
                    className="block w-full px-4 py-2 text-base text-white bg-zinc-700 border-none rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ease-in-out duration-200"
                >
                    <option value="" disabled selected>
                        {title}
                    </option>
                    {options.map((item, index) => (
                        <option key={index} value={item}>
                            {item.toUpperCase()}
                        </option>
                    ))}
                </select>
                
            </div>
        </div>
    );
};

export default Dropdown;


