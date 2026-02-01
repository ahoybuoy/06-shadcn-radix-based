import * as React from "react"
import { cn } from "@/lib/utils"
import { CustomButton } from "./custom-button"

/**
 * Custom pricing card with significant drift from design system
 */
export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  plan: string
  price: string
  period?: string
  features: string[]
  popular?: boolean
  ctaText?: string
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ className, plan, price, period = "/month", features, popular, ctaText = "Get Started", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // DRIFT: All arbitrary values
          "relative flex flex-col rounded-[24px] border-[2px] p-[32px]",
          // DRIFT: Custom shadow
          "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]",
          popular
            ? "border-[#7c3aed] bg-gradient-to-b from-[#7c3aed] to-[#5b21b6]"
            : "border-[#e5e7eb] bg-white",
          className
        )}
        {...props}
      >
        {popular && (
          <div className={cn(
            // DRIFT: Arbitrary positioning and styling
            "absolute -top-[14px] left-1/2 -translate-x-1/2",
            "rounded-full bg-[#fbbf24] px-[16px] py-[6px]",
            "text-[12px] font-bold uppercase tracking-[0.05em] text-[#1f2937]"
          )}>
            Most Popular
          </div>
        )}

        <h3 className={cn(
          // DRIFT: Arbitrary font size
          "text-[24px] font-bold",
          popular ? "text-white" : "text-[#111827]"
        )}>
          {plan}
        </h3>

        <div className="mt-[20px] flex items-baseline">
          <span className={cn(
            // DRIFT: Arbitrary font size
            "text-[48px] font-extrabold tracking-tight",
            popular ? "text-white" : "text-[#111827]"
          )}>
            {price}
          </span>
          <span className={cn(
            "ml-[4px] text-[16px]",
            popular ? "text-white/80" : "text-[#6b7280]"
          )}>
            {period}
          </span>
        </div>

        <ul className="mt-[24px] space-y-[12px]">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-[10px] text-[15px]",
                popular ? "text-white/90" : "text-[#4b5563]"
              )}
            >
              <CheckIcon className={cn(
                "h-[18px] w-[18px]",
                popular ? "text-[#fbbf24]" : "text-[#10b981]"
              )} />
              {feature}
            </li>
          ))}
        </ul>

        <CustomButton
          variant={popular ? "cta" : "brand"}
          size="normal"
          className="mt-[28px] w-full"
        >
          {ctaText}
        </CustomButton>
      </div>
    )
  }
)
PricingCard.displayName = "PricingCard"

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export { PricingCard }
