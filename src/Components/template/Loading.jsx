import React from 'react'

const Loading = () => {
    return (
        <div className="relative h-full w-full  flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-72 w-72 border-t-4 border-b-4 border-purple-500"></div>
            <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-64 w-64"/>
        </div>
    )
}

export default Loading