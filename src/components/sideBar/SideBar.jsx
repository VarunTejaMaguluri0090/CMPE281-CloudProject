import "./SideBar.css"
import { Link } from "react-router-dom";
import {LineStyle, Assessment, Add, Remove, Update, LocalSee, PriorityHigh, Build, Map, Schedule, Person} from "@material-ui/icons"
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBarMenuWrapper"></div>
        <div className="sideBarMenu">
            <h3 className="sideBarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    
                    <Link to ="/home">
                    <li className="sidebarListItems ">
                        <LineStyle />
                            Home
                    </li>
                    </Link>

                    <li className="sidebarListItems">
                        <Schedule />
                            Schedule
                    </li>

                    <li className="sidebarListItems">
                        <Person />
                        Manage Profile
                    </li>

                </ul>
        </div>

            <h3 className="sideBarTitle">Cameras</h3>
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <Add />
                    Add Camera
                </li>

                <li className="sidebarListItems">
                    <Remove />
                    Remove Camera
                </li>

                <li className="sidebarListItems">
                    <Update />
                    Update Camera
                </li>

                <li className="sidebarListItems">
                    <LocalSee />
                    View Camera
                </li>

            </ul>

            
            <h3 className="sideBarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <Assessment />
                    Reports
                </li>

                <li className="sidebarListItems">
                    <PriorityHigh />
                    Alerts
                </li>
                
                <Link to ="/maintain">
                <li className="sidebarListItems">
                    <Build />
                    Maintainance Requets
                </li>
                </Link>

                <li className="sidebarListItems">
                    <Map />
                    Maps
                </li>

            </ul>



            
          
    </div>
  );
}
