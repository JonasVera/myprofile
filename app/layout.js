import "./globals.css";
import Header from "@/app/Header/page";
import Theming from "@/theme/Theming";

export const metadata = {
  title: "jonassilvavera.me",
  description: "Meu portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="">
        <Theming>
          <Header />
          {children}
        </Theming>
      </body>
    </html>
  );
}
