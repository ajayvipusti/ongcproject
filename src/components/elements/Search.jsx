import React, { useEffect, useState } from 'react'

const Search = ({data,setFilteredData}) => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredDataState] = useState([]);
  
    useEffect(() => {
        const updatedFilteredData = data&&data?.filter((item) => {
            for (const key in item) {
              const value = item[key];
              if (typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
              if (typeof value === 'number' && value.toString().includes(search)) {
                return true;
              }
            }
            return false;
          });
          setFilteredDataState(updatedFilteredData);
        }, [data, search]);
  
    useEffect(() => {
      setFilteredData(filteredData);
    }, [filteredData, setFilteredData]);

    return (
        <label>
            Search:
            <input type='text' onChange={(e) => setSearch(e.target.value.toLowerCase())} className='w-44 px-1 border rounded-sm ml-1 border-gray-200 py-1' />
        </label>
    )
}

export default Search