import React from 'react'
import EventListItem from './EventListItem'

function EventsAnalysisCard() {
    return (
        <div className="bg-[#0B0B0B] w-full rounded-2xl h-full ">
            <div className="p-10 h-full flex flex-col items-start gap-3">
                <h2 className='text-lg font-semibold'>Events</h2>
                <div className='h-full overflow-y-scroll scrollbar-custom'>
                    <div className='h-fit '>
                        <h5 className='text-sm font-extralight text-left mb-2'>Now happening</h5>
                        <div className=' gap-3 flex flex-col mb-8'>
                            {
                                Array(2).fill().map((_, i) => (
                                    <EventListItem type="now" key={i} />
                                ))
                            }
                        </div>
                        <h5 className='text-sm font-extralight text-left mb-2'>Upcoming events</h5>
                        <div className=' gap-3 flex flex-col'>
                            {
                                Array(20).fill().map((_, i) => (
                                    <EventListItem key={i} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsAnalysisCard
