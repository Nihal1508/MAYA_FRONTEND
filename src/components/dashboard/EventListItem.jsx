import React from 'react'

function EventListItem({ type }) {

    return (
        <div className={`py-2 pl-8 pr-8 border-l-4 border-purplePrimary bg-gradient-to-r ${type === 'now' ? 'from-[#A192FF44] to-transparent' : 'to-[#A192FF44] from-transparent'}`}>
            <h2 className='text-left line-clamp-1'>
                Arcane Hackathon - Kerala's First Ever Tri-Venue Hackathon alsdfkjdsflksjf alskdjf alskj dslkjdsjj
            </h2>
        </div>
    )
}

export default EventListItem
