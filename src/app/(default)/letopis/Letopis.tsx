'use client'

import { Timeline } from '@material-tailwind/react'
import { belkachiHistory, kutanaHistory, lappyHistory } from './data'
import TimeItem from './TimeItem'

export default function Letopis() {
    return (
        <div>
            <div className="container text-tarawera-950">
                <Timeline>
                    <h2 className="text-3xl font-bold py-5">Лаппы</h2>
                    {lappyHistory.map(
                        ({ year, text }: { year: number; text: string }) => {
                            return (
                                <TimeItem year={year} text={text} key={year} />
                            )
                        }
                    )}
                    <h2 className="text-3xl font-bold py-5">Белькачи</h2>
                    {belkachiHistory.map(
                        ({ year, text }: { year: number; text: string }) => {
                            return (
                                <TimeItem year={year} text={text} key={year} />
                            )
                        }
                    )}
                    <h2 className="text-3xl font-bold py-5">Кутана</h2>
                    {kutanaHistory.map(
                        ({ year, text }: { year: number; text: string }) => {
                            return (
                                <TimeItem year={year} text={text} key={year} />
                            )
                        }
                    )}
                </Timeline>
            </div>
        </div>
    )
}
