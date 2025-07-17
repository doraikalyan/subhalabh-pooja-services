import React from 'react'

export const RadioGroup = ({ children, value, onValueChange, className = '' }) => (
  <div className={className}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { 
        checked: child.props.value === value,
        onChange: () => onValueChange(child.props.value)
      })
    )}
  </div>
)

export const RadioGroupItem = ({ value, id, className = '', ...props }) => (
  <input
    type="radio"
    id={id}
    value={value}
    className={`h-4 w-4 rounded-full border border-primary ${className}`}
    {...props}
  />
)
