import { useApp } from 'context/AppContext';
import Main from './main/Main';
import DashboardProvider from './provider/context';
import SideNavigation from './sidenavigation';
import TopNavigation from './topnavigation';



export default function WrapLayout({ children }) {
  const { isSideBar } = useApp();

  const style = {
    container: ` h-screen overflow-auto relative `,
    // mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-24 lg:space-y-4`,
    mainContainer: `flex flex-wrap pl-0 w-screen`,
  };

  return (
    <DashboardProvider>
      {/* <div className={style.container}>
        <div className="flex items-start">
          <div className={style.mainContainer}> */}
            <TopNavigation />
            {isSideBar &&
              <SideNavigation mobilePosition="left" />
            }
            <Main children={children}/>
          {/* </div>
        </div>
      </div> */}
    </DashboardProvider>
  );
}
