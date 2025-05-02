import { useEffect } from 'react';
import axios from './util/axios.customize.js';
function App (){
  useEffect(()=>{
    const fectHelloWorld= async()=>{
      const res = await axios.get(`/v1/api/`)
      console.log("res suscess",res.data)

    }
    fectHelloWorld();


  },[])
  return (
    <>
    Hello world
    </>
  )
}
export default App;