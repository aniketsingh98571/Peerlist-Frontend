import SideBar from "./components/SideBar/SideBar";
export default function Home() {
  return (
     <div className="w-page-width h-page-height ">
        <div className="w-side-width h-side-height border-2 divide-red-500 border-solid">
            <SideBar/>
        </div>
     </div>
  );
}
