import DashboardSidebar from "./_components/sidebar/page";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <DashboardSidebar />
      <div className="pl-[60px] h-full">

        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;