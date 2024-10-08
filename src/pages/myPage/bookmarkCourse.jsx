import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import PostCard from '../../components/common/PostCard';

const BookmarkCourse = () => {
  const [myData, setMyData] = useState(null);

  const GetData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/springboot/route/bookmark', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Box>
      {myData && myData.length > 0 ? (
        <Box>
          {myData.map((data, index) => (
            <PostCard key={index} data={data} flag={false} />
          ))}
        </Box>
      ) : (
        <Box>No Data Available</Box>
      )}
    </Box>
  );
};

export default BookmarkCourse;
