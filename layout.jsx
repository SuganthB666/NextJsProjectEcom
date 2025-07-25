// // app/layout.tsx

// import NavComponent from "./NavBar"

// export const metadata = {
//   title: 'My App',
//   description: 'A sample Next.js app with layout',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
      
//       <body>
//         <NavComponent />
//         {children}
//       </body>
//     </html>
//   )
// }


import NavComponent from "./NavBar";
import { SearchProvider } from "./context/SearchContext";

export const metadata = {
  title: 'My App',
  description: 'A sample Next.js app with layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <NavComponent />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
