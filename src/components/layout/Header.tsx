import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav className='bg-slate-50 shadow-md text-black'>
      <div className='flex flex-row justify-between max-w-[80rem] mx-auto w-11/12 p-4'>
        <h1>Logo</h1>
        <ul className='flex space-x-4'>
          {link.map((item, index) => (
            <li key={index} className='flex relative'>
              <Link href={item.path}>{item.name}</Link>
              {item.isDropdown && (
                <div className='group'>
                  <ChevronDown className='hover:rotate-180 transition-all duration-300 hover:cursor-pointer' />
                  <div className='invisible group-hover:visible absolute transition-all duration-200'>
                    sasas
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const link = [
  { name: 'Beranda', path: '/', isDropdown: false },
  { name: 'Profil', path: '/', isDropdown: true },
  { name: 'Layanan', path: '/', isDropdown: true },
  { name: 'Klien', path: '/', isDropdown: false },
  { name: 'Kontak', path: '/', isDropdown: false },
];
