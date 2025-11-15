export const metadata = {
  title: "Freedom Fly Travel",
  description: "Your trusted travel partner for global adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
