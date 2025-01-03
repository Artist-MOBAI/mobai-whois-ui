import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOBAI NEXT WHOIS UI",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`absolute left-0 top-0 flex min-h-screen antialiased`}>
        <div className="font-mono">
          <div className="ml-16 mt-16">
            <div
              data-tauri-drag-region
              className="fixed left-0 right-0 top-0 z-10 h-32"
            />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
