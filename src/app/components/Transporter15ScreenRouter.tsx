import { useEffect, useState, type ComponentType } from "react";
import { transporterRoutes } from "./Transporter15Screens";

export default function Transporter15ScreenRouter(){
  const [route,setRoute]=useState(()=>window.location.hash.replace(/^#/,'')||'transporter-dashboard');
  useEffect(()=>{const h=()=>setRoute(window.location.hash.replace(/^#/,'')||'transporter-dashboard');window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h)},[]);
  const Screen: ComponentType<{onBack?:()=>void}>|undefined=transporterRoutes[route];
  if(!Screen){window.location.hash='transporter-dashboard';return null;}
  return <Screen onBack={()=>{window.history.back()}}/>;
}
