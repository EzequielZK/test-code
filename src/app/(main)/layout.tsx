import MainLayoutComponent from "@/layouts/mainLayout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutComponent>{children}</MainLayoutComponent>;
}
