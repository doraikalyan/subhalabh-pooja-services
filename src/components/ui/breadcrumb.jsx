import React from 'react'

export const Breadcrumb = ({ children, className = '' }) => (
  <nav className={className}>
    <ol className="flex items-center space-x-2">
      {children}
    </ol>
  </nav>
)

export const BreadcrumbList = ({ children }) => <>{children}</>
export const BreadcrumbItem = ({ children, className = '' }) => (
  <li className={`inline-flex items-center ${className}`}>
    {children}
  </li>
)
export const BreadcrumbLink = ({ children, href, className = '' }) => (
  <a href={href} className={`text-sm text-muted-foreground hover:text-foreground ${className}`}>
    {children}
  </a>
)
export const BreadcrumbSeparator = ({ children = '/' }) => (
  <span className="text-muted-foreground">{children}</span>
)
export const BreadcrumbPage = Breadcrumb
