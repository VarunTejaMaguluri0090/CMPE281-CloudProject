import { CameraAlt, AddAlert, Build } from "@material-ui/icons";
import "./FeaturedInfo.css"

export default function FeaturedInfo() {
  return (
    <div className="Featured">
        <div className="FeaturedItem">
            <span className="Title">Active Cameras</span>
            <div className="Content">
                <span className = "Logo"><CameraAlt/></span>
                <span className = "Money">1000</span>
            </div>
            <span className="Extras">Avaliable active cameras across all locations</span>
        </div>


        <div className="FeaturedItem">
            <span className="Title">Maintainance Requests</span>
            <div className="Content">
                <span className = "Logo"><Build/></span>
                <span className = "Money">500</span>
            </div>
            <span className="Extras">Maintainance Requests currently open</span>
        </div>


        <div className="FeaturedItem">
            <span className="Title">Alerts</span>
            <div className="Content">
                <span className = "Logo"><AddAlert/></span>
                <span className = "Money">450</span>
            </div>
            <span className="Extras">Alerts recieved by the team</span>
        </div>
    </div>    
   
  );
}
