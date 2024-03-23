import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/providers/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kerdos',
    description: 'Seu controle de finanças',
    icons: {
        icon: [
            {
                url: '/favicon.jpeg',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AuthProvider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='light'
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
