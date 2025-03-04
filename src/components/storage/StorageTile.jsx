import React from 'react';

function StorageTile({ event }) {
    return (
        <div
            key={event.id}
            className="relative group cursor-pointer bg-gray-700 bg-cover bg-center rounded-2xl w-56 h-56 transition-all duration-300 ease-in-out hover:w-96"
            style={{ backgroundImage: `url(${event.imageSrc})`, borderRadius: '1rem' }}
        >
            <div
                style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5), rgba(0,0,0,0.7))', borderRadius: '1rem' }}
                className="relative flex gap-1 items-center justify-between rounded-2xl w-full h-full backdrop-blur-sm p-5"
            >
                <div className="flex flex-col gap-1 items-start justify-center w-fit h-fit">
                    <p className="text-2xl text-left font-bold">{event.name}</p>
                    <p className="text-base font-semibold">{event.description}</p>
                    <p className="text-sm">{event.date}</p>
                </div>
                <div
                    className="absolute  self-center top-0 bottom-0 my-auto right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-end"
                >
                    <p className="text-xl font-bold">{event.storage}</p>
                    <p className="text-sm font-medium">{event.images}</p>
                </div>
            </div>
        </div>
    );
}

export default StorageTile;
