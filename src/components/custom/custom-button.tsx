import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Custom button that DRIFTS from the shadcn Button component
 * - Uses arbitrary values instead of design tokens
 * - Inconsistent with the design system
 */
export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'brand' | 'cta' | 'warning'
  size?: 'tiny' | 'normal' | 'huge'
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'brand', size = 'normal', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // DRIFT: Using arbitrary values instead of design tokens
          "inline-flex items-center justify-center font-semibold transition-all",
          // DRIFT: Custom border-radius not in design system
          "rounded-[14px]",
          // DRIFT: Custom shadows
          "shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]",
          // Variant styles with arbitrary colors
          {
            // DRIFT: Hardcoded hex colors instead of CSS variables
            'bg-[#6366f1] text-white hover:bg-[#4f46e5]': variant === 'brand',
            // DRIFT: Custom gradient not in design system
            'bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white': variant === 'cta',
            // DRIFT: Arbitrary yellow
            'bg-[#fbbf24] text-[#1f2937]': variant === 'warning',
          },
          // Size styles with arbitrary values
          {
            // DRIFT: Arbitrary padding and height
            'h-[28px] px-[10px] text-[11px]': size === 'tiny',
            'h-[42px] px-[18px] text-[14px]': size === 'normal',
            'h-[56px] px-[32px] text-[18px]': size === 'huge',
          },
          className
        )}
        {...props}
      />
    )
  }
)
CustomButton.displayName = "CustomButton"

export { CustomButton }
