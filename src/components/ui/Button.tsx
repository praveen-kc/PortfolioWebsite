import { type ReactNode, type ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-[family-name:var(--font-body)] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap box-border",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:brightness-110 active:scale-95 border border-primary border-[1.5px]",
        ghost: "bg-transparent text-primary hover:bg-surface/5 border border-primary border-[1.5px]",
        accent: "bg-xr-green text-void hover:brightness-105",
        icon: "bg-transparent border-none text-t1 hover:bg-elevated rounded-lg",
      },
      size: {
        sm: "px-4 py-2.5 text-sm rounded-[8px] h-[40px]",
        md: "px-6 py-3 text-base rounded-[8px] h-[48px]",
        lg: "px-8 py-3 text-[15px] font-[500] rounded-[8px] h-[48px] leading-[1.5]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  children: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, asChild = false, disabled, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
