import {
    Command,
    //Command menu
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    //Keyboard shortcuts
    // CommandShortcut
  } from "@/components/ui/command";
  import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react';
  import Link from "next/link";
  
const Sidebar = () => {
    return ( 
<Command className="bg-orange-50 dark:bg-slate-500 rounded-none">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <LayoutDashboard className='mr-2 h-4 w-4' />
        <Link href='..'>Dashboard</Link>
      </CommandItem>
      <CommandItem>        
        <Newspaper className='mr-2 h-4 w-4' />
      <Link href='posts'>Posts</Link>
      </CommandItem>
      {/* Non-functioning --- non-clickable - no page */}
      <CommandItem>        
        <Folders className='mr-2 h-4 w-4' />
      <Link href='#'>Categories</Link>
      </CommandItem>
      {/* Non-functioning --- non-clickable - no pages */}
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className='mr-2 h-4 w-4' />
        <span>Profile</span>
        {/* <CommandShortcut>Ctrl+P</CommandShortcut> */}
      </CommandItem>
      <CommandItem>
        <CreditCard className='mr-2 h-4 w-4' />
        <span>Billing</span>
        {/* <CommandShortcut>Ctrl + B</CommandShortcut> */}
        </CommandItem>
      <CommandItem>
        <Settings className='mr-2 h-4 w-4' />
        <span>Settings</span>
        {/* <CommandShortcut>Ctrl + S</CommandShortcut> */}
        </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>


     );
}
 
export default Sidebar;