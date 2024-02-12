import Link from 'next/link';
import Image from 'next/image';
import {Typography} from '@/providers/AppProvider';
import MobileMenu from './navbar/MobileMenu';
import ThemeButton from './navbar/ThemeButton';
import PCMenu from './navbar/PCMenu';

export const navItems = [
  {
    name: 'About',
    path: '/#about',
  },
  {
    name: 'Work',
    path: '/#work',
  },
  {
    name: 'Portfolio',
    path: '/#portfolio',
  },
  {
    name: 'Achievements',
    path: '/#achievements',
  },
  {
    name: 'Contact',
    path: '/#contact',
  },
  // {
  //   name: 'Posts',
  //   path: '/posts',
  // },
];

function NavBar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-[#DEF2FF]/90 dark:bg-[#0A090D]/90">
      <div className="mx-auto sm:px-4 px-2 flex flex-row h-[5.063rem] max-w-7xl justify-between items-center">
        {/* left */}
        <div className="flex flex-row my-auto">
          {/* logo */}
          <Link href="/" className="my-auto">
            <div className="flex gap-1">
              <Image
                src="/assets/images/logo.png"
                alt="logo image"
                width={60}
                height={60}
                priority={true}
              />
              <Typography
                variant="h4"
                className="my-auto font-bold lg:block hidden">
                jooncco
              </Typography>
            </div>
          </Link>
        </div>
        <div className="flex flex-row my-auto space-x-1">
          <PCMenu />
          <MobileMenu />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
