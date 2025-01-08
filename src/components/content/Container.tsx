import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`flex w-full flex-1 flex-col gap-8  px-4 py-4 xl:px-8   ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
