import NavBar from "./_components/navBar";
import SideBar from "./_components/sideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <NavBar/>
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed instet-y-0 z-50">
        <SideBar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
      {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
