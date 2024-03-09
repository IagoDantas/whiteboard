"use client"
import { useOrganization } from "@clerk/nextjs"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { api } from "@/convex/_generated/api"
import { UseApiMutation } from "@/hooks/use-api-mutation"

export function EmptyBoards() {
  const { organization } = useOrganization()
  const { mutate, pending } = UseApiMutation(api.board.create)

  const onClick = () => {
    if (!organization) return


    mutate({
      orgId: organization.id,
      title: "Untitled"
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/note.svg"
        alt="Empty Boards"
        height={110}
        width={110}
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board
      </h2>
      <p className="text-muted-foreground">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  )
}