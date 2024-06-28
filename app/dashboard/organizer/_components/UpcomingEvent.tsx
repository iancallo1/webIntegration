import { ScrollArea } from "@/components/ui/scroll-area"
import UpcomingCard from "../_components/UpcomingCard"


import { approvedEvents } from "../_action/action"


export default async function UpcomingEvent() {

    const approve = await approvedEvents()

    const date = new Date().toISOString().slice(0,10)
    

    console.log(approve)

    return (
        <>
        <ScrollArea className="h-[400px] w-[500px] rounded-md border p-4 m-2">
            <p className="font-bold text-xl">Upcoming Event</p>
            {
                approve.map((content: any, key:any) => {
                    console.log(new Date(date), new Date(content.event_date))
                    return (
                        <>
                        {
                            !(new Date(content.event_date) > new Date(date))
                            ?
                            <>
                                <UpcomingCard/>
                            </>
                            :
                                <>
                                    <p>no upcoming event</p>
                                </>
                        }
                        </>
                    )
                })
            }
        </ScrollArea>
        </>
    )
}