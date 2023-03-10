import './App.css';
import {useState, useEffect} from 'react';
import UsecaseList from './components/UsecaseList';
import Form from './components/Form';

function App() {

  const [usecases,setUsecases] = useState([])
  const [editedUsecase,setEditedUsecase] = useState(null)


  useEffect(() => {
    fetch('http://127.0.0.1:5000/get',{
      'method':'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setUsecases(resp))
    .catch(error => console.log(error))
  },[])

  const editUsecase = (usecase) => {
    // console.log("Hello World")
    setEditedUsecase(usecase)
  }

  const updatedData = (usecase) => {
    const new_usecase = usecases.map(my_usecase => {
      if (my_usecase.usecase_id === usecase.usecase_id){
        return usecase
      }else{
        return my_usecase
      }
    })
    setUsecases(new_usecase)
  }

  const openForm = () => {
    setEditedUsecase(null)
  }
   
  return (
    <div className="App">

      <div className='row'>
        <div className='col'>
          <h1>Fast and ReactJS CRUD application</h1>
        </div>
        <div className='col'>
          <button className='btn btn-success' 
          onClick={openForm}>
            Insert usecase</button>
        </div>

      </div>

        <UsecaseList usecases = {usecases} editUsecase = {editUsecase}/>
        {editedUsecase ? <Form usecase = {editedUsecase} updatedData={updatedData}/> : null}
    </div>
  );
}

export default App;
