import React from "react";
import "./MapsAndInfo.css";

export default function MapsAndInfo() {

  return (
    <div id="maps-and-info">
      
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2465152058952!2d77.56200682911647!3d12.908617306643231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x255666ebeef6fe69!2zMTLCsDU0JzMxLjAiTiA3N8KwMzMnNDUuMiJF!5e0!3m2!1sen!2sin!4v1639978076333!5m2!1sen!2sin" 
      width="100%" 
      height="100%" 
      style={{border:'0'}} 
      allowfullscreen="" 
      loading="lazy"></iframe>
      </div>
    </div>
  );
}
