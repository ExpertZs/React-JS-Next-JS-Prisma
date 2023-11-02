import "./globals.css";

export async function generateMetadata() {
  // SEO DATA FETCH
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body >{children}</body>
    </html>
  );
}
