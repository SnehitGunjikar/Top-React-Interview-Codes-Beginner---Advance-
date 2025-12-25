import React, {useState, useEffect} from 'react';
import './App.css';
const DataFetchApp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      setData(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    })
  }, []);

    if (isLoading) return <p>Loading...</p>;

    if (!data || !Array.isArray(data)) 
        
        return <p>No data available or data format is incorrect.</p>;

    return (
      <div>
        <h1>Products and its Descriptions</h1>
      <ul>
        {data.map(item => (
          <li key={item.id} className='mainid'>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      </div>
    );


}
export default DataFetchApp;