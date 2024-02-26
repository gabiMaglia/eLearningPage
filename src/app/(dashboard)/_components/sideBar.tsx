import { Logo } from "./logo";
import {SideBarRoutes} from "./sidebar-routes";

const SideBar = () => {
  return (
    <div className="h-full w-full border-r flex flex-col overflow-y-auto bg-white shadow-sm ">
      <div className="p-6 mx-auto " >
        <Logo/>
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoutes />
      </div>
    </div>
  );
};

export default SideBar;
