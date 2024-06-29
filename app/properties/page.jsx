import PropertyCard from '@/components/PropertyCard';
import React from 'react'
import { fetchProperties } from '@/utils/requests';
import PropertySearchForm from '@/components/PropertySearchForm';

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // Sort properties by date
    properties.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
        <section className="bg-blue-700 py-4">
            <div className="nax-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
                <PropertySearchForm />
            </div>
        </section>
        
            <section className="px-4 py-6">
              <div className="container-xl lg:container m-auto px-4 py-6">
        
                {/*That means : if there is no properties then show the paragraph that contains the message "No properties found" , else show all properties that exist in properties.json*/}
                {/*If length of properties is null Then (?) ... Else (:)*/}
                {properties.length === 0 ? (
                  <p>No properties found</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <PropertyCard key={property._id} property= {property} />
                  ))}
                </div>
                )}
              </div>
            </section>
    </>
  )
}

export default PropertiesPage;