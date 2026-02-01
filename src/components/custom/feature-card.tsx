import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Custom feature card that DRIFTS from shadcn Card
 * - Uses arbitrary values
 * - Inconsistent spacing
 * - Custom shadows
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
  featured?: boolean
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon, featured, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // DRIFT: Arbitrary border-radius
          "rounded-[20px] border",
          // DRIFT: Arbitrary padding
          "p-[26px]",
          // DRIFT: Custom shadow not from design system
          "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]",
          // DRIFT: Hardcoded colors instead of CSS variables
          featured
            ? "border-[#8b5cf6] bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]"
            : "border-[#e5e7eb] bg-white",
          // DRIFT: Custom hover effect
          "hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {icon && (
          <div className={cn(
            // DRIFT: Arbitrary size and spacing
            "mb-[18px] flex h-[52px] w-[52px] items-center justify-center",
            // DRIFT: Hardcoded colors
            "rounded-[12px] bg-[#6366f1] text-white"
          )}>
            {icon}
          </div>
        )}
        <h3 className={cn(
          // DRIFT: Arbitrary font size
          "text-[20px] font-semibold",
          // DRIFT: Hardcoded color
          "text-[#111827]",
          // DRIFT: Arbitrary margin
          "mb-[10px]"
        )}>
          {title}
        </h3>
        <p className={cn(
          // DRIFT: Arbitrary line height and font size
          "text-[15px] leading-[1.7]",
          // DRIFT: Hardcoded color
          "text-[#6b7280]"
        )}>
          {description}
        </p>
      </div>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }
