const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
    try {
        // Handle the case where the domain is not available yet 
        if (!apiDomain){
            return [];
        }
      // Generate a unique cache-busting query parameter
      const cacheBuster = new Date().getTime(); // Current timestamp
  
      const res = await fetch(`${apiDomain}/properties?cache=${cacheBuster}`);
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
  
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  export { fetchProperties };