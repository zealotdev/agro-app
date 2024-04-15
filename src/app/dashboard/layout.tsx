import { AiOutlineSecurityScan } from 'react-icons/ai';
import Nav from '@/components/nav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Nav />
      {children}
      {/* AI overlay button */}
      <div className="flex items-center justify-center rounded-full bg-blue-500 h-11 w-11 md:h-14 md:w-14 text-white text-2xl md:text-3xl fixed bottom-20 md:bottom-12 right-4 md:right-10 hover:shadow-lg hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-blue-600">
        <AiOutlineSecurityScan />
      </div>
    </section>
  );
}
