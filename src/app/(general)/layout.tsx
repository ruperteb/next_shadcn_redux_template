import Navbar from "@/components/ui/complex/navbar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
