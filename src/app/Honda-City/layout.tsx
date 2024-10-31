


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-200 py-20">

        {children}

    </div>

  );
}
