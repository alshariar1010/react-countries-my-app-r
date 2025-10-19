import React, { use } from 'react';
import Country from '../Country/country';
// import Country from '../Country/country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1 className='mb-5'>in the country: {countries.length} </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                {
                    countries.map(countriess => <Country
                        key={countriess.cca3.cca3}
                        countriess={countriess}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;