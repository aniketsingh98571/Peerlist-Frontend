import SideBar from "./components/SideBar/SideBar";
import RightComponent from "./components/RightComponent/RightComponent";
export default function Home() {
  return (
     <div className="w-page-width h-page-height my-o mx-auto flex">
        <div className="w-side-width h-side-height">
            <SideBar/>
        </div>
        <div className="w-right-width h-side-height  border-l  border-r border-black border-solid">
            <RightComponent/>
        </div>
     </div>
  );
}
