import { Outlet } from "remix";
import Header from "~/components/modules/Header";

const MainLayout = () => {
  return (
    <div className='flex flex-col items-center bg-[#f6f6f6]'>
      <Header />
      <Outlet />
      {/* <FooterComponent /> */}
    </div>
  );
}
 
export default MainLayout;