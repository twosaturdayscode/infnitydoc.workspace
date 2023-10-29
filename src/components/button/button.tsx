import { Slot } from '@radix-ui/react-slot'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { cva, type VariantProps } from '../utils'

const buttonVariants = cva({
  base: 'inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-all active:translate-y-0.5 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-brand hover:bg-brand/60 text-white',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input bg-white hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-brand underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-14 rounded-md px-8',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
