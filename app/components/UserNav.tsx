import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export function UserNav(){
    return (
          <DropdownMenu>
             <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage src="https://github.com/shadcn.png"  alt="" />
                        <AvatarFallback>Amar</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Amrul Huda</p>
                        <p className="text-xs leading-none text-muted-foreground
                        ">amar@next.tsx</p>
                    </div>
                </DropdownMenuLabel>
            </DropdownMenuContent> 
        </DropdownMenu>
    )
}