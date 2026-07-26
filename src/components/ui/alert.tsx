import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-2xl border p-4 text-sm shadow-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 items-start [&>svg]:row-span-2 [&>svg]:mt-0.5 [&>svg]:w-5 [&>svg]:h-5",
  {
    variants: {
      variant: {
        default: "bg-white text-ink ring-1 ring-slate-900/5 border-transparent [&>svg]:text-p1",
        destructive:
          "bg-red-50/80 border-red-200/80 text-red-900 [&>svg]:text-red-600",
        success:
          "bg-emerald-50/80 border-emerald-200/80 text-emerald-900 [&>svg]:text-emerald-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
