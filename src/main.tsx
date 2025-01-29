import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, lazyRouteComponent } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import "./index.css"
import ErrorComponent from '@/components/error-component'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'viewport',
  defaultNotFoundComponent: lazyRouteComponent(() => import('@/components/not-found-component')),
  defaultErrorComponent: ({error}) => <ErrorComponent error={error} />,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
