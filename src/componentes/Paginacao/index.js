import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

export default function Paginacao({ handleRangeChange, maxId }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [page, setPage] = useState(parseInt(query.get('page') || '1', 10));
  
  
  const handleChange = (event, newPage) => {
    const startId = (newPage - 1) * 20 + 1;
    const newEndId = startId + 19;
    const finalEndId = newEndId < maxId ? newEndId : maxId;
    handleRangeChange(startId, finalEndId);
    setPage(newPage);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left' && page > 1) {
      const newPage = page - 1;
      const startId = (newPage - 1) * 20 + 1;
      const newEndId = startId + 19;
      const finalEndId = newEndId < maxId ? newEndId : maxId;
      handleRangeChange(startId, finalEndId);
      setPage(newPage);
    } else if (direction === 'right' && page < Math.ceil(maxId / 20)) {
      const newPage = page + 1;
      const startId = (newPage - 1) * 20 + 1;
      const newEndId = startId + 19;
      const finalEndId = newEndId < maxId ? newEndId : maxId;
      handleRangeChange(startId, finalEndId);
      setPage(newPage);
    }
  };

  return (
    <div>
      <Pagination
        page={page}
        count={Math.ceil(maxId / 20)}
        onChange={handleChange}
        disabled={false}
      />
      
    </div>
  );
}
