
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import CollapsibleSidebar from './CollapsibleSidebar';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {isMobile ? (
        <>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="fixed top-4 left-4 z-50">
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <CollapsibleSidebar setSheetOpen={setOpen} />
            </SheetContent>
          </Sheet>
          <main className="flex-1 p-4 md:p-6 overflow-y-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </main>
        </>
      ) : (
        <>
          <CollapsibleSidebar />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </main>
        </>
      )}
    </div>
  );
}
