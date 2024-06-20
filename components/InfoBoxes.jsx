import React from 'react';
import Link from 'next/link';
import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
                heading='For Renters'
                backgroundColor='bg-gray-100'
                buttonInfo={{
                    text: 'Browse Properties',
                    link: '/properties',
                    backgroundColor: 'bg-black'
                }}>
                    Find Your Dream Rental Property. Bookmark properties and Conatct owners.
            </InfoBox>
            <InfoBox
                heading='For Property Owners'
                backgroundColor='bg-blue-100'
                buttonInfo={{
                    text: 'Add Property',
                    link: '/properties/add',
                    backgroundColor: 'bg-blue-500'
                }}>
                    List Your Properties and Reach Potentiel Tenants. Rent as an Airbnb or Long Term.
            </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes;