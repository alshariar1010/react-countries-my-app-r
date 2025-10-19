
import { Suspense } from 'react'
import Countries from '../components/Countries/Countries'
import './App.css'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {
  return (
    <>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Countries countriesPromise ={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
