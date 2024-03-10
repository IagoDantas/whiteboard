"use client"

import { api } from "@/convex/_generated/api"
import { UseApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { toast } from "sonner"
interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}
export function NewBoardButton({
  orgId,
  disabled
}: NewBoardButtonProps) {
  const { mutate, pending } = UseApiMutation(api.board.create)

  const onClick = () => {
    if (!orgId) return
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => { toast.success("Board created") })
      .catch(() => { toast.error("Failed to create board") })
  }


  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div

      />
      <Plus className="w-12 h-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">
        New Board
      </p>
    </button >
  )
}