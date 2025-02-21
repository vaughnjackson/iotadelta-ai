import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Try AI', path: '/try-ai' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 