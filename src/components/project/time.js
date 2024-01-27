import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export function Time(){
    return(
        <>
        <h1 className="text-center">Time Tracking Apps</h1>
        <p className="text-center">Clockify works across devices. Track time from anywhere — all data is synced online.</p>
          

        <div class="row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3">
  <div class="col-lg-4 ">
    <div class="">
      <img src="https://clockify.me/assets/images/time-tracking-app-desktop@2x.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title text-center">DESKTOP APP</h4>
        <div className="text-center">
  
  <button style={{marginRight:'5px'}} className="text-primary border-primary">Windows</button>
  <button style={{marginRight:'5px'}} className="text-primary  border-primary">Mac</button>
  <button style={{marginRight:'5px'}} className="text-primary  border-primary">Linux</button>
</div>
       
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="">
      <img src="https://clockify.me/assets/images/time-tracking-app-web.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title text-center">WEB APP</h4>
        <div className="text-center">
  
  <button style={{marginRight:'5px'}} className="text-primary  border-primary">Edge</button>
  <button style={{marginRight:'5px'}} className="text-primary  border-primary">Chrome</button>
  <button style={{marginRight:'5px'}} className="text-primary  border-primary">Firefox</button>
</div>
       
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="">
      <img src="https://clockify.me/assets/images/time-tracking-app-mobile.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center  border-primary">MOBILE APP</h5>

        <div className="text-center">
  <button style={{marginRight:'5px'}} className="text-primary border-primary">Android</button>
  <button style={{marginRight:'5px'}} className="text-primary border-primary">iOS</button>
</div>
       
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="">
      <img src="https://clockify.me/assets/images/time-tracking-app-kiosk@2x.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center  border-primary">KIOSK APP</h5>
        <div className="text-center">
  
  <button style={{marginRight:'5px'}} className="text-primary border-primary">Any device</button>
  
</div>
       
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Time
