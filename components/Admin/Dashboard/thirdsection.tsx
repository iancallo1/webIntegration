"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import AdminEventCard from '@/components/Static/Admin/AdminEventCard';
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import { Dot } from 'lucide-react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import 'swiper/css';

const festival = [
    {
        title: "Wedding",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: " Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
    {
        title: "Festival",
        description: "Celebration of Santo Niño (Child Jesus)",
        organizer: "Rairu"
    },
]

const events  = [
    {
        name: "Mother's Anniversary",
        status: "pending",
        location: "Cagayan De Oro, Lim Ketkai Atrium",
        schedule: "January 25, 2024 : 10:00AM",
    },
    {
        name: "Mother's Anniversary",
        status: "pending",
        location: "Cagayan De Oro, Lim Ketkai Atrium",
        schedule: "January 25, 2024 : 10:00AM",
    },
    {
        name: "Mother's Anniversary",
        status: "pending",
        location: "Cagayan De Oro, Lim Ketkai Atrium",
        schedule: "January 25, 2024 : 10:00AM",
    },
]

export default function DashboardThirdSection() {

    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
        } ,1000)

        setLoading(false)
    }, [])

    console.log(event)

    return (
        <div className="flex w-full justify-around pr-[17vw] pl-[9vw] pb-[12vh]">
            <div className="flex w-[45vw]">
                <Swiper 
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    >

                        {
                            isLoading ? 
                            festival.map((content, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <AdminEventCard title={content.title} description={content.description} organizer={content.organizer}/>
                                    </SwiperSlide>
                                )
                            })
                            :
                            <>
                            <p>loading</p>
                            {
                            festival.map((content, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                    <Skeleton className="w-[200px] h-[300px] rounded-3xl bg-amber-300" />
                                    </SwiperSlide>
                                )
                            })
                            }
                            </>
                        }
                </Swiper>
            </div>
            <div className='w-full pl-[8vw]'>
                {
                    events.map((content: any, key: any) => {
                        return (
                            <div key={key} className='flex items-center rounded-md font-medium bg-white text-center text-black py-5 pl-5 pr-10 w-full mt-5'>
                                <div><Dot color='yellow' /></div>
                                <div className='pl-3'>{content.name}<br/>{content.status}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}