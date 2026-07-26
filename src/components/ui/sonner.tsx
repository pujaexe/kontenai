"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-ink group-[.toaster]:border-transparent group-[.toaster]:ring-1 group-[.toaster]:ring-slate-900/5 group-[.toaster]:shadow-xl group-[.toaster]:rounded-2xl",
          description: "group-[.toast]:!text-slate-500",
          actionButton:
            "group-[.toast]:!bg-p1 group-[.toast]:!text-white group-[.toast]:rounded-full group-[.toast]:font-semibold",
          cancelButton:
            "group-[.toast]:!bg-slate-100 group-[.toast]:!text-ink group-[.toast]:rounded-full",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
