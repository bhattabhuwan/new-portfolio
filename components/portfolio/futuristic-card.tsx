import type * as React from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FuturisticCard({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-white/15 bg-white/10 shadow-xl shadow-cyan-950/10 backdrop-blur-xl dark:bg-white/[0.06]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-300/60 before:to-transparent",
        className,
      )}
      {...props}
    />
  );
}
