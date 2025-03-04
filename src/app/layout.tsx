import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Layout from '@/headful/Layout/Layout';
import HeaderContent from '@/headful/HeaderContent/HeaderContent';
import Logo from '@/headful/HeaderContent/Logo/Logo';
import Menu from '@/headful/HeaderContent/Menu/Menu';
import FooterContainer from '@/headful/FooterContainer/FooterContainer';
import FooterContactButtonWrapper from '@/headful/FooterContainer/FooterContactButtonWrapper/FooterContactButtonWrapper';
import FooterContactWrapper from '@/headful/FooterContainer/FooterContactWrapper/FooterContactWrapper';

const pretendard = localFont({
    src: [
        {
            path: '../assets/fonts/Pretendard-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Pretendard-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Pretendard-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Pretendard-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-pretendard',
});

export const metadata: Metadata = {
    title: '파트너 물류',
    description: '파트너 물류',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr" suppressHydrationWarning>
            <body suppressHydrationWarning className={pretendard.className}>
                <div id="root"></div>
                <Layout>
                    <Layout.Header>
                        <HeaderContent>
                            <Logo />
                            <Menu />
                        </HeaderContent>
                    </Layout.Header>
                    <Layout.Main>{children}</Layout.Main>
                    <Layout.Footer>
                        <FooterContainer>
                            <FooterContactWrapper />
                            <FooterContactButtonWrapper />
                        </FooterContainer>
                    </Layout.Footer>
                </Layout>
            </body>
        </html>
    );
}
