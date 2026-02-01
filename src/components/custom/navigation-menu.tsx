import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Custom navigation menu that drifts from shadcn Navigation Menu
 * Uses hardcoded values instead of design tokens
 */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[]
  logo?: React.ReactNode
}

const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, items, logo, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          // DRIFT: Hardcoded height
          "flex h-[72px] items-center justify-between",
          // DRIFT: Hardcoded padding
          "px-[32px]",
          // DRIFT: Hardcoded border and background
          "border-b border-[#e5e7eb] bg-white",
          className
        )}
        {...props}
      >
        {logo && (
          <div className="flex-shrink-0">
            {logo}
          </div>
        )}

        <ul className="flex items-center gap-[32px]">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  // DRIFT: Hardcoded font size
                  "text-[15px] font-medium transition-colors",
                  item.active
                    // DRIFT: Hardcoded colors
                    ? "text-[#6366f1]"
                    : "text-[#4b5563] hover:text-[#111827]"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

export { NavigationMenu }
