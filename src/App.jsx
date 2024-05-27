import { useState } from "react"
import Bill from "./components/Bill"
import Services from "./components/Services"
import FriendService from "./components/FriendService"
import Payment from "./components/Payment"

function App() {

  const [bill , setBill] = useState(null)
  const [service , setService] = useState(null)
  const [friendService , setFriendService] = useState(0)


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-primary font-poppins">
        <div className="bg-white p-10 rounded-md flex flex-col gap-y-10">
        <Bill bill={bill} setBill={setBill}/>
        <Services service={service} setService={setService}/>
        <FriendService friendService={friendService} setFriendService={setFriendService} />
        <Payment bill={bill} setBill={setBill} service={service} friendService={friendService}/>
        </div>
      </div>
    </>
  )
}

export default App
