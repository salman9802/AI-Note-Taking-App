import { cn } from "@/lib/utils";
import React from "react";

const Loader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        `inline-block size-12 animate-spin rounded-full border-4 border-b-primary`,
        className,
      )}
      {...props}
    ></div>
  );
};

export default Loader;
