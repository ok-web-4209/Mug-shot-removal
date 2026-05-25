"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasValue = props.value !== undefined && props.value !== "";

    return (
      <div className="relative w-full">
        <div className="relative">
          {icon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              "w-full h-12 px-4 pt-5 pb-1 bg-bg-tertiary border rounded-md text-foreground placeholder-transparent transition-all duration-200",
              "focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none",
              error ? "border-error" : "border-border",
              icon && "pl-11",
              className
            )}
            placeholder={label}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none",
              icon && "left-11",
              focused || hasValue
                ? "top-1.5 text-[11px] text-accent font-medium"
                : "top-1/2 -translate-y-1/2 text-sm text-text-muted"
            )}
          >
            {label}
          </label>
        </div>
        {error && (
          <p
            id={`${id}-error`}
            className="mt-1 text-xs text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasValue = props.value !== undefined && props.value !== "";

    return (
      <div className="relative w-full">
        <div className="relative">
          <textarea
            ref={ref}
            id={id}
            className={cn(
              "w-full min-h-[120px] px-4 pt-6 pb-2 bg-bg-tertiary border rounded-md text-foreground placeholder-transparent transition-all duration-200 resize-y",
              "focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none",
              error ? "border-error" : "border-border",
              className
            )}
            placeholder={label}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none",
              focused || hasValue
                ? "top-2 text-[11px] text-accent font-medium"
                : "top-4 text-sm text-text-muted"
            )}
          >
            {label}
          </label>
        </div>
        {error && (
          <p
            id={`${id}-error`}
            className="mt-1 text-xs text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
