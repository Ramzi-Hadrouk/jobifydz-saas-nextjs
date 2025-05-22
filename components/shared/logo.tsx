import Link from "next/link";
import { cn } from "@/lib/utils" 

export function Logo( {className}:{className?:string}) {
  return (
    <Link href="/" className={cn("text-xl font-bold", className)}>
      <span >
        <span className="text-orange-400 font-bold text-2xl">j</span>obifyDz
      </span>
    </Link>
  );
}