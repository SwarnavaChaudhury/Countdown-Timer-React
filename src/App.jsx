import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [days, setDays] = useState(0)
  let [hours, setHours] = useState(0)
  let [mins, setMins] = useState(0)
  let [secs, setSecs] = useState(0)

  let [targetDate, setTargetDate] = useState(localStorage.getItem("countDownTime") ? String(localStorage.getItem("countDownTime")) : "December, 25, 2025")


  let getTime = () => {

    let time = Date.parse(targetDate) - Date.now()

    // to avoid -(ve) value
    if (time < 0) {
      setDays(0); setHours(0); setMins(0); setSecs(0);
      return;
    }

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMins(Math.floor((time / (1000 * 60)) % 60))
    setSecs(Math.floor((time / 1000) % 60))

  }

  useEffect(() => {
    let timeInterval = setInterval(() => getTime(), 1000);
    return () => clearInterval(timeInterval)
  }, [targetDate])



  let setCountDownTimer = (event) => {
    event.preventDefault();
    let selectedDttm = event.target.countdown_dttm.value;
    let parsedDate = new Date(selectedDttm).toString();
    setTargetDate(parsedDate)
    event.target.reset()
    localStorage.setItem("countDownTime", parsedDate)
  }



  return (
    <>

      <section className='bg-stone-200 min-h-[100vh] w-full'>
        <div className='flex flex-col justify-center items-center gap-5 mx-auto min-h-[100vh]'>
          <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
            <form onSubmit={setCountDownTimer}>
              <input type="datetime-local" name="countdown_dttm" id="countdown_dttm" className='border w-[300px] h-[40px] bg-white rounded-lg p-1 mr-5' />
              <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                Set
              </button>
            </form>

            <h1>
              <b> Expired: </b> {targetDate}
            </h1>

          </div>
          <div className='flex justify-center items-center gap-5 mx-auto'>
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
        </div>
      </section>

    </>
  )
}

export default App
