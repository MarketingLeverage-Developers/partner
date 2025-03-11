import Script from 'next/script';
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
import FixedWrapper from '@/headful/FixedWrapper/FixedWrapper';

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
            <head>{/* 필요한 메타 태그 등 추가 */}</head>
            <body suppressHydrationWarning className={pretendard.className}>
                {/* 인라인 스크립트: Smartlog 설정 */}
                <Script id="smartlog-config" strategy="beforeInteractive">
                    {`
                      var hpt_info = {'_account':'UHPT-31021', '_server': 'a29'};
                    `}
                </Script>
                {/* 외부 스크립트: Smartlog */}
                <Script src="//cdn.smlog.co.kr/core/smart.js" strategy="beforeInteractive" charSet="utf-8" />
                {/* noscript 태그 */}
                <noscript>
                    <img
                        src="//a29.smlog.co.kr/smart_bda.php?_account=31021"
                        style={{ display: 'none', width: 0, height: 0, border: 0 }}
                        alt="Smartlog"
                    />
                </noscript>

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
                    <FixedWrapper />
                </Layout>
            </body>
        </html>
    );
}
