import { Route, type RouteProps, Routes } from 'react-router-dom'
import { memo, Suspense, useCallback } from 'react'
import { routeConfig } from '../config/routeConfig'

const fallback = (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Идет загрузка страницы...
  </div>
);
const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={fallback}>
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    )
  }, [])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
}

export default memo(AppRouter)
