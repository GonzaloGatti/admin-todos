// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { SideBar, TopMenu } from '@/components';
import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from 'react-icons/ci';

export default function DashboardLayout({ children }: { children: React.ReactNode }){
  return (
    <>
      <SideBar />
      
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

        <TopMenu />

        <div className="px-6 pt-6 bg-white pb-4 m-4 rounded">

          { children } 

        </div>
      </div>
    </>
  );
}