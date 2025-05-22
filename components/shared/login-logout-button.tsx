
import { LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export function LoginLogoutButton() {
let [ isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Button variant="outline" size="sm" onClick={ ()=>setIsAuthenticated (!isAuthenticated) }>
      {isAuthenticated ? (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </>
      ) : (
        <>
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </>
      )}
    </Button>
  );
}
