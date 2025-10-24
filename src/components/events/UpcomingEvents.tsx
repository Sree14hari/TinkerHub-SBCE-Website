"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import EventCard from "./EventCard"
import type { Event } from "./EventCard"

export default function UpcomingEvents({ events }: { events: Event[] }) {
  const loading = !events || events.length === 0;

  if (loading) {
    return <p className="text-center text-lg text-foreground/80">Loading events...</p>
  }
  
  if (events.length === 0) {
    return <p className="text-center text-lg text-foreground/80">No upcoming events found. Please check back later.</p>
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-8">
        {events.map((event) => (
          <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3 pl-8">
            <div className="p-1 pt-4 h-[300px]">
              <EventCard event={event} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
