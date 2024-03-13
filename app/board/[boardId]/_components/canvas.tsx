"use client"

import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

interface CanvaProps{
    boardId: string
}


export function Canvas({boardId}:CanvaProps){
    return(
        <main
            className="h-full w-full relative bg-neutral-100 touch-none"
        >
            <Info/>
            <Participants/>
            <Toolbar />
        </main>
    )
}