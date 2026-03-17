import { Suspense } from 'react'
import './App.css'
import MyNav from './components/MyNav/MyNav'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

const pricingPromise = fetch("./PricingData.json").then(res => res.json())
console.log(pricingPromise);


function App() {

  return (
    <>
      <header>
        {/* <Navbar></Navbar> */}
        <MyNav></MyNav>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Pricing></Pricing>
        </Suspense>

      </main>

        <footer>

        </footer>

    </>
  )
}

export default App
