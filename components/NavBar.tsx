'use client';

import React, {useEffect, useState} from 'react';
import Logo from './navbar/Logo';
import MobileNav from './navbar/MobileNav';
import DesktopNav from './navbar/DesktopNav';
import {
  HomeIcon,
  BookOpenIcon,
  VariableIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import ThemeSwitch from './navbar/ThemeSwitch';

export const navItems = {
  Home: {
    path: '/',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  Posts: {
    path: '/posts',
    icon: <BookOpenIcon className="h-5 w-5" />,
  },
  Cp: {
    path: '/competitive-programming',
    icon: <VariableIcon className="h-5 w-5" />,
  },
  Resume: {
    path: '/resume',
    icon: <UserIcon className="h-5 w-5" />,
  },
};

export default function NavBar(): JSX.Element {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function changeColor(): void {
      if (window.scrollY >= 228) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 flex justify-between border-b border-b-gray-500 rounded-b-xl
        ${isScrolling ? 'bg-gray-900/90' : 'bg-transparent'}`}>
      <div className="flex flex-row my-auto">
        <Logo />
        <DesktopNav />
      </div>
      <div className="px-4 flex flex-row my-auto space-x-2">
        <ThemeSwitch />
        <MobileNav />
      </div>
    </div>
  );
}
