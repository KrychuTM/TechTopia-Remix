import { Outlet } from "remix";

const MainLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Outlet />
    </div>
  );
}
 
export default MainLayout;