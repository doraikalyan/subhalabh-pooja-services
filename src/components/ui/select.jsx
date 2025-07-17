import React from 'react'

export const Select = ({ children, onValueChange, defaultValue, ...props }) => (
  <select 
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2"
    onChange={(e) => onValueChange && onValueChange(e.target.value)}
    defaultValue={defaultValue}
    {...props}
  >
    {children}
  </select>
)

export const SelectContent = ({ children }) => <>{children}</>
export const SelectItem = ({ children, value }) => <option value={value}>{children}</option>
export const SelectTrigger = ({ children }) => <>{children}</>
export const SelectValue = ({ placeholder }) => <option value="">{placeholder}</option>
