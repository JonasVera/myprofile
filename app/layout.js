 
import "./globals.css";
import Header from "@/app/Header/page"; 
import Theming from "@/theme/Theming";
import FooterPage from "@/app/Footer/page"; 

export const metadata = {
  title: "jonassilvavera.me",
  description: "Meu portifolio",
};

export default function RootLayout({ children }) {
 
 
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/JonasVera/repos');
      const result = await response.json();

    console.log(result);
  
 
    }


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
