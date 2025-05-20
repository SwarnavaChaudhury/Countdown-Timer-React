import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [days, setDays] = useState(0)
  let [hours, setHours] = useState(0)
  let [mins, setMins] = useState(0)
  let [secs, setSecs] = useState(0)

  let lastDate = "May, 25, 2025";

  let getTime = () => {
    let time = Date.parse(lastDate) - Date.now()
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMins(Math.floor((time / (1000 * 60)) % 60))
    setSecs(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    let timeInterval = setInterval(() => getTime(), 1000);
    return () => clearInterval(timeInterval)
  }, [])

  return (
    <>

      <section className='bg-stone-200 min-h-[100vh] w-full'>
        <div className='flex justify-center items-center gap-5 mx-auto min-h-[100vh]'>
          <div className='p-2 border border-violet-500 text-center rounded-md w-[100px]'>
            <p className='text-3xl'>
              {days}
            </p>
            <span>
              Days
            </span>
          </div>
          <div className='p-2 border border-violet-500 text-center rounded-md w-[100px]'>
            <p className='text-3xl'>
              {hours}
            </p>
            <span>
              Hours
            </span>
          </div>
          <div className='p-2 border border-violet-500 text-center rounded-md w-[100px]'>
            <p className='text-3xl'>
              {mins}
            </p>
            <span>
              Minutes
            </span>
          </div>
          <div className='p-2 border border-violet-500 text-center rounded-md w-[100px]'>
            <p className='text-3xl'>
              {secs}
            </p>
            <span>
              Seconds
            </span>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
