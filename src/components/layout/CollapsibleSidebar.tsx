
"use client";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  ShoppingBag, 
  Book, 
  GraduationCap,
  Mail,
  Menu,
  Github,
  Linkedin,
  Twitter,
  BarChart3,
  X
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isCollapsed: boolean;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, icon, text, isCollapsed, isActive, onClick }: NavItemProps) => {
  return (
    <Link to={href} className={`sidebar-link ${isActive ? 'active' : ''}`} onClick={onClick}>
      <span>{icon}</span>
      {!isCollapsed && <span>{text}</span>}
    </Link>
  );
};

interface Props {
  setSheetOpen?: (open: boolean) => void;
}

export default function CollapsibleSidebar({ setSheetOpen }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const navItems = [
    { href: '/', icon: <Home size={20} />, text: 'Bio' },
    { href: '/dev-stats', icon: <BarChart3 size={20} />, text: 'Dev Stats' },
    { href: '/projects', icon: <Briefcase size={20} />, text: 'Hobby Projects' },
    { href: '/work', icon: <Briefcase size={20} />, text: 'Work Projects' },
    { href: '/resume', icon: <FileText size={20} />, text: 'Resume' },
    { href: '/products', icon: <ShoppingBag size={20} />, text: 'Products' },
    { href: '/free-courses', icon: <Book size={20} />, text: 'Free Courses' },
    { href: '/premium-courses', icon: <GraduationCap size={20} />, text: 'Premium Courses' },
    { href: '/coming-soon', icon: <User size={20} />, text: 'Coming Soon' },
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: <Github size={20} />, text: 'GitHub' },
    { href: 'https://linkedin.com', icon: <Linkedin size={20} />, text: 'LinkedIn' },
    { href: 'https://twitter.com', icon: <Twitter size={20} />, text: 'Twitter' },
  ];

  const handleNavItemClick = () => {
    if (isMobile && setSheetOpen) {
      setSheetOpen(false);
    }
  };

  return (
    <motion.aside 
      className="h-screen bg-sidebar flex flex-col border-r border-sidebar-border"
      initial={{ width: isMobile ? '100%' : 240 }}
      animate={{ width: isCollapsed && !isMobile ? 70 : isMobile ? '100%' : 240 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-4">
        {isMobile && setSheetOpen ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto" 
            onClick={() => setSheetOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </Button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-sidebar-accent transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu size={20} />
          </button>
        )}
      </div>

      <div className="flex flex-col items-center px-3 py-4">
        <Avatar className={`${isCollapsed ? 'h-12 w-12' : 'h-24 w-24'} mb-3 border-2 border-primary`}>
          <AvatarImage src="/lovable-uploads/6cc34287-a39c-463d-9c27-2ec8c4087d89.png" alt="Edward Odhiambo" />
          <AvatarFallback>EO</AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <h1 className="font-bold text-xl text-gradient mb-3">Edward Odhiambo</h1>
        )}
        
        {!isCollapsed && (
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sidebar-foreground hover:text-primary transition-colors"
                aria-label={link.text}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto px-3">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              text={item.text}
              isCollapsed={isCollapsed}
              isActive={pathname === item.href}
              onClick={handleNavItemClick}
            />
          ))}
        </nav>
        
        <div className="mt-6 pt-6 border-t border-sidebar-border">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <Link 
          to="/hire-me" 
          className="block w-full py-2 px-4 bg-primary text-primary-foreground rounded-md text-center font-medium hover:bg-primary/90 transition-colors"
          onClick={handleNavItemClick}
        >
          {isCollapsed ? <Mail size={20} /> : 'Hire Me'}
        </Link>
      </div>
    </motion.aside>
  );
}
