import React, { useContext, useEffect, useState } from 'react'

const viewportContext = React.createContext({})

const ViewportProvider = ({ children }: { children: JSX.Element }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return <viewportContext.Provider value={{ width, height }}>{children}</viewportContext.Provider>
}

const useViewport = () => {
  // @ts-ignore
  const { width, height } = useContext(viewportContext)
  return { width, height }
}

export { ViewportProvider, useViewport }
