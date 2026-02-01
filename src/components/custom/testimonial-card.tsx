import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Testimonial card with drift from design system
 */
export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, author, role, company, avatar, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // DRIFT: Arbitrary values
          "rounded-[18px] border border-[#e5e7eb] bg-white p-[28px]",
          // DRIFT: Custom shadow
          "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]",
          className
        )}
        {...props}
      >
        {/* Quote mark */}
        <div className={cn(
          // DRIFT: Hardcoded styling
          "mb-[16px] text-[48px] font-serif leading-none text-[#6366f1]"
        )}>
          "
        </div>

        <p className={cn(
          // DRIFT: Arbitrary font size and line height
          "text-[16px] leading-[1.75] text-[#374151]",
          "mb-[24px]"
        )}>
          {quote}
        </p>

        <div className="flex items-center gap-[14px]">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className={cn(
                // DRIFT: Arbitrary size
                "h-[48px] w-[48px] rounded-full object-cover"
              )}
            />
          ) : (
            <div className={cn(
              // DRIFT: Hardcoded colors and size
              "flex h-[48px] w-[48px] items-center justify-center",
              "rounded-full bg-[#6366f1] text-[18px] font-semibold text-white"
            )}>
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className={cn(
              // DRIFT: Hardcoded styling
              "text-[15px] font-semibold text-[#111827]"
            )}>
              {author}
            </p>
            <p className={cn(
              // DRIFT: Arbitrary font size
              "text-[13px] text-[#6b7280]"
            )}>
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }
