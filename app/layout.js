import localFont from "next/font/local";
import "./globals.css";

const bpgGlahoSylfaen = localFont({
  src: "../bpg_glaho_sylfaen_[FONTS.GE]/bpg_glaho_sylfaen.ttf",
  display: "swap",
});

export const metadata = {
  title: "ZrdaMedia",
  description: "We Help Brands Grow Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bpgGlahoSylfaen.className}>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
