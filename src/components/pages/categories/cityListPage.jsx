import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityListPage = () => {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchCities = async () => {
    try {
      let response;
      if (filter === '') {
        response = await axios.get(
          'https://data.gov.il/api/3/action/datastore_search',
          {
            params: {
              resource_id: '5c78e9fa-c2e2-4771-93ff-7f400a12f7ba',
              limit: 999999,
            },
          }
        );
      } else {
        // אם יש חיפוש, נשלוף ערים שמתאימות למחרוזת המלאה בשדה החיפוש
        response = await axios.get(
          'https://data.gov.il/api/3/action/datastore_search',
          {
            params: {
              resource_id: '5c78e9fa-c2e2-4771-93ff-7f400a12f7ba',
              q: filter,
            },
          }
        );
      }

      const allCities = response.data.result.records;

      // מיון הרשימה לפי שם העיר
      allCities.sort((a, b) => a.שם_ישוב.localeCompare(b.שם_ישוב));

      setCities(allCities);
    } catch (error) {
      console.error('שגיאה בהבאת ערים:', error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, [filter]);

  return (
    <div className="container">
    <h2 className='mt-4'>רשימת ערים</h2>
    <div className='mt-4'>
      <input className='p-2'
        type="text"
        placeholder="חיפוש לפי שם העיר"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className='table mt-3'>
        <thead>
          <tr>
            <th>שם העיר</th>
      
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city._id}>
              <td>{city.שם_ישוב}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CityListPage;
