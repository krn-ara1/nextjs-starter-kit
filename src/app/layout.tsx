// リセットCSS
import 'destyle.css';

// グローバルCSS
import './globals.scss';

// フォント

export const metadata = {
  title: 'ダミータイトル',
  description: 'ダミーディスクリプション',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
