import './App.css';
import { Routes , Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import SignUp from './components/SignUp';
import PrivateCom from './components/PrivateCom';
import HomePage from './pages/HomePage'
import Modal from './components/Modal';
import AddPost from './components/AddPost';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [postCardData, setPostCardData] = useState([]);
  const[id,setId] = useState("")
  const {reset} = useForm();
  
  const editItem = (id) => {
    const itemToEdit = postCardData.find(item => item.id === id);
    reset(itemToEdit);
  };
  return (
    <>
      <Routes>
        <Route element={<PrivateCom/>}>
        <Route path='/' element={<Layout><HomePage setId={setId} id={id} postCardData={postCardData} setPostCardData={setPostCardData} editItem={editItem}/></Layout>} />
        <Route path='/add-post' element={<Modal><AddPost id={id} postCardData={postCardData}/></Modal>} />
        
        </Route>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;
