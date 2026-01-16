import "./globals.css";

export const metadata = {
  title: "ZrdaMedia",
  description: "We Help Brands Grow Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
