import React from 'react'
import { useRouter } from 'next/router'
import data from './../../data/sampleData.json'
import EventCard from '@/components/EventCard'
import EventDetailsCard from '@/components/EventDetailsCard'

function EventDetails() {
  const router = useRouter()
  console.log(router.query)
  const id = router.query.id

  console.log(id)

  const foundEvent = data.find(event => event.id === id)

  return (
  <div className='max-w-screen min-h-screen overflow-x-auto bg-emerald-50'>
    <div className='mt-[64px] mx-auto w-[80%] flex flex-col items-center gap-3 p-6'>
      {!foundEvent?"":<EventDetailsCard event={foundEvent}/>}
    </div>
  </div>

  )
  
  
}

export default EventDetails