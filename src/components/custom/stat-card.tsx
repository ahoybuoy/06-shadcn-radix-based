import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Stat card with drift from design system
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  change?: {
    value: string
    trend: 'up' | 'down' | 'neutral'
  }
  icon?: React.ReactNode
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, label, value, change, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // DRIFT: Arbitrary border radius and padding
          "rounded-[16px] border border-[#e5e7eb] bg-white p-[24px]",
          // DRIFT: Custom shadow
          "shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <span className={cn(
            // DRIFT: Arbitrary font size
            "text-[13px] font-medium uppercase tracking-[0.025em]",
            "text-[#6b7280]"
          )}>
            {label}
          </span>
          {icon && (
            <div className="text-[#9ca3af]">
              {icon}
            </div>
          )}
        </div>

        <div className="mt-[12px]">
          <span className={cn(
            // DRIFT: Arbitrary font size
            "text-[32px] font-bold tracking-tight",
            "text-[#111827]"
          )}>
            {value}
          </span>
        </div>

        {change && (
          <div className="mt-[8px] flex items-center gap-[6px]">
            <span className={cn(
              "text-[13px] font-medium",
              {
                // DRIFT: Hardcoded colors
                'text-[#10b981]': change.trend === 'up',
                'text-[#ef4444]': change.trend === 'down',
                'text-[#6b7280]': change.trend === 'neutral',
              }
            )}>
              {change.trend === 'up' && '+'}
              {change.value}
            </span>
            <span className="text-[12px] text-[#9ca3af]">vs last period</span>
          </div>
        )}
      </div>
    )
  }
)
StatCard.displayName = "StatCard"

export { StatCard }
