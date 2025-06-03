
"use server"
import { auth, signOut } from "@/features/auth"
import Link from 'next/link';
import { LogIn, LogOut } from 'lucide-react';
import { Button , buttonVariants} from '@/components/ui/button';

export async function LoginLogoutButton() {
 const session = await auth()
 
 
return session ? (
    <form
      action={async function () {
        "use server"
        await signOut()
      }}
    >
      <Button variant="default" type="submit" size="sm" >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </form>
  ) : (
    
     
        <Link href="/login" className={buttonVariants({ variant: "default", size: "sm" })} > 
          <LogIn className="mr-2 h-4 w-4" />
          Login
    
        </Link>
      
  
  );
}
