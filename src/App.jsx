import { useState } from "react"
import Bill from "./components/Bill"
import Services from "./components/Services"
import FriendService from "./components/FriendService"
import Payment from "./components/Payment"

function App() {

  const [bill , setBill] = useState(0)
  const [service , setService] = useState(0)


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-primary font-poppins">
        <div className="bg-white p-10 rounded-md flex flex-col gap-y-10">
        <Bill bill={bill} setBill={setBill}/>
        <Services service={service} setService={setService}/>
        <FriendService />
        <Payment bill={bill}/>
        </div>
      </div>
    </>
  )
}

export default App
