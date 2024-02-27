"use client"

import { useOrganizationList } from "@clerk/nextjs"
import { Item } from "./item"


export function List() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  })

  if (!userMemberships) return null


  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Item
          key={mem.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  )
}