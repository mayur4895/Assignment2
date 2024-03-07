import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
 
import './globals.css';
 
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

 
 
 
import ModalProvider from '@/components/providers/modal-provider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
const font = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BLog posts app',
  description: 'ms developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient()
  return (
 
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className)}>
          <ThemeProvider
            defaultTheme="light"
            attribute="class"
            enableSystem={false}
            storageKey="todo"
          >   
 
              {children}
              <Toaster />
            <ModalProvider />
          </ThemeProvider>
        </body>
      </html>
   
         
  );
}
