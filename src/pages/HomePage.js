import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function HomePage({ setId, setPostCardData, postCardData }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    getPostData();
  }, []);

  const getIdForUpdate = (id) => {
    setId(id);
    navigate('/add-post');
  };

  const getPostData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/my/post`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const result = await response.json();
      setPostCardData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deletePost = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/my/post/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      // No need to reassign 'response', use a different variable name for the parsed JSON
      const result = await response.json();
      // Update state only if the delete operation was successful
      if (result.success) {
        setPostCardData(prevPosts => prevPosts.filter(post => post._id !== id));
      } else {
        throw new Error('Failed to delete post');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <button className='fixed top-2 right-2 border-2 bg-blue-500 text-white hover:bg-white hover:text-blue-500 m-3 p-3 rounded cursor-pointer' onClick={() => navigate('/add-post')}>Add Post</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {postCardData.map((item, index) => (
            <div className='m-5' key={index}>
              <div className="w-[60%] m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={item.imageUrl} alt="Post" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
                  <div className='flex flex-row justify-between items-center my-2'>
                    <p>{item.location}</p>
                    <p><span className='font-bold mr-2'>Posted by:</span>{item.name}</p>
                  </div>
                  <div className='flex flex-row justify-between items-center '>
                    <div><span className='font-bold'>Date:</span>{new Date(item.date).toLocaleDateString()}</div>
                    <div><span className='font-bold'>Time:</span>{new Date(item.date).toLocaleTimeString()}</div>
                  </div>
                  <div>
                    <div className='flex flex-row items-center font-bold my-3 cursor-pointer'>
                      <div className='mx-3'>Like</div>
                      <div className='mx-3'>Comment</div>
                    </div>
                    <div className='flex flex-row items-center font-bold my-3 cursor-pointer'>
                      <div className='mx-3' onClick={() => getIdForUpdate(item._id)}>Edit</div>
                      <div className='mx-3 cursor-pointer' onClick={() => deletePost(item._id)}>Delete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
