import React, { useState } from 'react'

export const Calendar = ({ 
  selected, 
  onSelect, 
  className = '', 
  disabled = () => false,
  mode = 'single',
  ...props 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }
  
  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(prev.getMonth() + direction)
      return newMonth
    })
  }
  
  const isSelected = (date) => {
    if (!selected || !date) return false
    return date.toDateString() === selected.toDateString()
  }
  
  const isDisabled = (date) => {
    if (!date) return true
    return disabled(date)
  }
  
  const isToday = (date) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }
  
  const handleDateClick = (date) => {
    if (!date || isDisabled(date)) return
    if (onSelect) {
      onSelect(date)
    }
  }
  
  const days = getDaysInMonth(currentMonth)
  const currentMonthName = months[currentMonth.getMonth()]
  const currentYear = currentMonth.getFullYear()
  
  return (
    <div className={`bg-white border rounded-lg p-4 ${className}`}>
      {/* Month Header with Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          onClick={() => navigateMonth(-1)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-lg font-semibold text-gray-900">
          {currentMonthName} {currentYear}
        </h2>
        
        <button
          type="button"
          onClick={() => navigateMonth(1)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          if (!date) {
            return <div key={index} className="h-9 w-9" />
          }
          
          const selected = isSelected(date)
          const disabled = isDisabled(date)
          const today = isToday(date)
          
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleDateClick(date)}
              disabled={disabled}
              className={`
                h-9 w-9 text-sm rounded-md transition-colors
                ${disabled 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'hover:bg-gray-100 cursor-pointer'
                }
                ${selected 
                  ? 'bg-orange-600 text-white hover:bg-orange-700' 
                  : ''
                }
                ${today && !selected 
                  ? 'bg-gray-100 font-medium' 
                  : ''
                }
              `}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
      
      {/* Today Button */}
      <div className="mt-4 pt-3 border-t">
        <button
          type="button"
          onClick={() => handleDateClick(new Date())}
          className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
          disabled={isDisabled(new Date())}
        >
          Today
        </button>
      </div>
    </div>
  )
}