import React, { useState } from 'react'

export const Accordion = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
)

export const AccordionItem = ({ children, value, className = '' }) => (
  <div className={`border-b ${className}`}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { value })
    )}
  </div>
)

export const AccordionTrigger = ({ children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <button
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <span>{isOpen ? '−' : '+'}</span>
    </button>
  )
}

export const AccordionContent = ({ children, className = '' }) => (
  <div className={`overflow-hidden text-sm ${className}`}>
    <div className="pb-4 pt-0">{children}</div>
  </div>
)
