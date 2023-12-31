import { useEffect, useState } from "react"


const useStatus = () => {

    const [statusD, setStatus] = useState(true)

useEffect(() => {
  window.addEventListener('offline', ()=>{
    setStatus(false)
  })


  window.addEventListener('online', ()=>{
    setStatus(true)
  })

}, [])


  return statusD
}

export default useStatus
