"use client";

import React from "react";
import { Input, InputProps } from "./input";
import { cn } from "@/lib/utils";

export interface PhoneInputProps extends Omit<InputProps, "type"> {}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        type="tel"
        className={cn(className)}
        placeholder={props.placeholder || "Phone number"}
        pattern="[0-9]*"
        inputMode="numeric"
        ref={ref}
        {...props}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";
