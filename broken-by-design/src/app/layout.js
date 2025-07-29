import "./globals.css";

export const metadata = {
  title: "Broken By Design",
  description: "Why made good UI/UX when you can make bad UI/UX",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
