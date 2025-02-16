import { UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ({hide}) => {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
      
         {/* <button className="btn btn-primary" onCli ck={()=>navigate("/login")}>Login</button> */}
        
        
       
          <a class="navbar-brand">Dashboard</a>
          
          <form class="d-flex">
          
          <UserButton  afterSignOutUrl='/login'/>
        </form>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
