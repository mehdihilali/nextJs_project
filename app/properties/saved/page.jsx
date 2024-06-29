'use client';
import React from 'react';
import { useState , useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';

const SavedPropertiesPage = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSavedProperties = async () => {
            try {
                const res = await fetch('/api/bookmarks');

                if (res.status === 200) {
                    const data = await res.json();
                    setProperties(data);
                } else {
                    console.log(res.statusText);
                    toast.error('Failed to fetch saved properties');
                }
            } catch (error) {
                console.log(error);
                toast.error('Failed to fetch saved properties');
            } finally {
                setLoading(false);
            }
        }

        fetchSavedProperties();
    },[]);


  return loading ? ( <Spinner loading={loading} /> ) : (
    <section className="px-4 py-6">
        <div class="border-4 border-blue-500 p-6 rounded-lg bg-blue-200">
            <h1 class="text-2xl mb-4 text-center">Saved Properties</h1>
        </div>
      <div className="container-xl lg:container m-auto px-4 py-6">

        {/*That means : if there is no properties then show the paragraph that contains the message "No properties found" , else show all properties that exist in properties.json*/}
        {/*If length of properties is null Then (?) ... Else (:)*/}
        {properties.length === 0 ? (
          <p>No Saved Properties</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property= {property} />
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

export default SavedPropertiesPage