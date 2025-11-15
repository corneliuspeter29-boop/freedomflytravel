import Navbar from "./components/Navbar";

export const metadata = {
  title: "Freedom Fly Travel",
  description: "Your trusted travel partner for global adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "40px", fontFamily: "Arial" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
