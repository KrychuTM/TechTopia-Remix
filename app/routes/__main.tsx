import { Outlet } from "remix";
import Banner from "~/components/modules/Banner";
import Header from "~/components/modules/Header";

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen pt-16 bg-[#f6f6f6]'>
      <Header />
      <Outlet />
    </div>
  );
}
 
export default MainLayout;