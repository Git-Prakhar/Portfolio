export const metadata = {
  title: "My Portfolio",
  description: "A portfolio of my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
