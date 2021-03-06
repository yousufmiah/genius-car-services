import React, { useEffect } from "react";
import "./Services.css";
import react, { useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  //useState([]) , er vitore jog korle 0, gon korle 1 dite hoy
  const [services, setServices] = useState([]);

  // useEffect er maddome data load kora hoy
  //[] eta holo dependency, ekhane value dile bar bar call korbe function ta.
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <div className="row">
        <h1 className="text-center text-primary mt-5">Our Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
