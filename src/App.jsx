import { Suspense } from 'react'
import './App.css'
import MyNav from './components/MyNav/MyNav'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

const pricingPromise = fetch("./PricingData.json").then(res => res.json())

function App() {

  return (
    <>
      <header>
        {/* <Navbar></Navbar> */}
        <MyNav></MyNav>
      </header>

      <main className="my-20">
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>

      </main>

        <footer>

        </footer>

    </>
  )
}

export default App
