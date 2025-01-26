import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/')({
  component: TestComponent,
})

function TestComponent() {
  return (
    <div className="">
      <h3>Welcome test!</h3>
    </div>
  )
}
