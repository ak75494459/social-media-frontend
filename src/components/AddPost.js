import React  from 'react';
import { useForm } from 'react-hook-form';

export default function AddPost({ id, postCardData }) {
  const { register, handleSubmit, reset } = useForm();

  // const editItem = (id) => {
  //   const itemToEdit = postCardData.find(item => item._id === id);
  //   reset(itemToEdit);
  //   console.log("edit called", itemToEdit); 
  // };

  // useEffect(() => {
  //   editItem(id)
  // }, [])

  const AddPost = async (data) => {
    const auth = localStorage.getItem('user');
    try {
      const formData = new FormData();

      if (data.imageFile instanceof FileList) {
        for (let i = 0; i < data.imageFile.length; i++) {
          formData.append('imageFile', data.imageFile[i]); 
        }
      } else {
        formData.append('imageFile', data.imageFile); 
      }

      formData.append('description', data.description);
      formData.append('location', data.location);
      formData.append('name', JSON.parse(auth).name);

      const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/my/post`, {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error('Error:', error);
    
    }
  };

  const onSubmit = (data) => {
    AddPost(data);
    alert('Your post has been added');
  };

  return (
    <div className='m-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col' encType="multipart/form-data">
        <label htmlFor="imageFile" className='font-bold ml-1'>Enter Image</label>
        <input type="file" {...register('imageFile')} id="imageFile" className='' name='imageFile' />

        <label htmlFor="description" className='font-bold ml-1'>Enter your thought</label>
        <textarea
          {...register('description')}
          id="description"
          rows={5}
          className="bg-gray-200 border-2 border-black text-black w-full p-2"
          placeholder="Enter your thought"
          name='description'
        />

        <label htmlFor="location" className='font-bold ml-1'>Enter location</label>
        <input
          {...register('location')}
          id='location'
          type="text"
          className='bg-gray-200 text-black border-2 border-black px-2 py-2'
          placeholder='Enter Location'
          name='location'
        />

        <input
          className='border-2 bg-blue-500 text-white hover:bg-white hover:text-blue-500 m-3 p-3 rounded cursor-pointer'
          type="submit"
          value="Add Post"
        />
      </form>
   
    </div>
  );
}
