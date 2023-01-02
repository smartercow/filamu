import Link from 'next/link';

const menu = [
  {
    name: 'Account',
    href: '/account'
  },
  {
    name: 'Bookmarks',
    href: '/account/favorites'
  },
  {
    name: 'Settings',
    href: '/account/settings'
  }
];
export default function AccountHeader(): JSX.Element {
  return (
    <div className='dosis flex gap-2 rounded-md bg-main-blue-sec py-2 px-4 text-main-gray shadow-2xl md:gap-4'>
      {menu.map((item) => (
        <div key={item.href}>
          <Link href={item.href} className='font-semibold uppercase'>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
