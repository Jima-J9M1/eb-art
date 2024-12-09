import { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="h-6 w-6" />
          <span className="font-semibold text-lg">Eb Art</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href='/'>
          <Button variant="ghost" className="text-foreground/60 hover:text-foreground">
            Home
          </Button>
          </a>
          <a href='/#services'>
          <Button variant="ghost" className="text-foreground/60 hover:text-foreground">
            Services
          </Button>
          </a>
          <a href='/#portfolio'>
          <Button variant="ghost" className="text-foreground/60 hover:text-foreground">
            Portfolio
          </Button>
          </a>
          <a href='/#contact'>
          <Button variant="ghost" className="text-foreground/60 hover:text-foreground">
            Contact
          </Button>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                Home
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                Services
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                Portfolio
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;