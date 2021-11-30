import React,{useState} from 'react'
import { Route, Routes } from "react-router-dom"
import PropertyList from './PropertyList'
import Details from './Details'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [tenantsData, setTenantsData] = useState([])

  const showDetail = (tenants) =>{
    console.log(tenants);
    setTenantsData(tenants )
  }

  return (
    <>
      <Routes>

        <Route path='/' element={<PropertyList showDetail={showDetail}/>}/>
        <Route exact path='/detail' element={<Details tenantsData={tenantsData}/>}/>

      </Routes>
    </>
  );
}

export default App;
