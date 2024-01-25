'use client'

import dynamic from 'next/dynamic'
import {useEffect, useState} from 'react'

const Time = dynamic(() => import('./time'), { ssr: false })

type Props = {
    time: number
    style?: string
}

export  const Clock2 = (props: Props) => {
    const [time, setTime] = useState(new Date(props.time))

    const [weekDay, setWeekDay] = useState<string>()
    const [time2, setTime2] = useState<string>()

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
            setWeekDay(new Date().toLocaleDateString('en-US', { weekday: 'long' }))
            //set the time2 in the format 14 september 2023
            setTime2(new Date().toLocaleDateString('en-US', {  year: 'numeric', month: 'long', day: 'numeric' }))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className={`text-7xl w-full h-full flex justify-center items-center flex-col ${props.style === "nightmode" ? "text-nightmode" : ""}`}>
            <div className="text-6xl py-2">{weekDay}</div>
            <div className="text-2xl">{time2}</div>
            <Time time={time} />

        </div>
    )
}

export default Clock2