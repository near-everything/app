import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import routes from '../routes'

import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
// import { SidebarContext } from '../context/SidebarContext'

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  // const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  // useEffect(() => {
  //   closeSidebar()
  // }, [location])

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${false && 'overflow-hidden'}`}
    >

      <div className="flex flex-col flex-1 w-full">
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/${route.path}`}
                    element={<route.component />}
                  />
                ) : null
              })}
              <Route path="/" element={<Navigate to="dashboard" />} />
              <Route element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
