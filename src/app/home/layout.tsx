interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <div>
      <div>
        {/* <Header /> */}

        {children}

        {/* <Footer /> */}
      </div>
    </div>
  );
}
