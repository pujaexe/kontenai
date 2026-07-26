import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 text-[15px] text-ink transition-all placeholder:text-slate-400 hover:border-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-p1 focus-visible:border-p1 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
