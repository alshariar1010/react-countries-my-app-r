import React from 'react';



const Country = ({countriess}) => {
    return (
        <div className='border-1 rounded p-2 flex flex-col justify-center items-center'>
            <img className='rounded-sm' src={countriess.flags.flags.png} alt={countriess.flags.flags.png} />
            <h3> Name: {countriess.name.common} </h3>
            <p>Population: {countriess.population.population} </p>
            <p>Area: {countriess.area.area} {countriess.area.area > 300000 ? "Big country" : "Small country"} </p>
            
        </div>
    );
};

export default Country;