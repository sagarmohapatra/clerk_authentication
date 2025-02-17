import { UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ hide }) => {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          {/* <button className="btn btn-primary" onClick={()=>navigate("/")}>Login</button> */}

          <a class="navbar-brand">Dashboard</a>

          <form class="d-flex">
            <UserButton afterSignOutUrl="/" />
          </form>
        </div>
      </nav>
      <div className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sem
        facilisis, suscipit dolor ac, volutpat nisi. In vitae tristique nisi.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Morbi ut metus dictum neque lobortis maximus non id
        dolor. Suspendisse a odio vitae justo volutpat blandit a in est. Morbi
        tincidunt sodales semper. Cras ut purus eu nibh scelerisque iaculis
        faucibus quis sem. Vestibulum suscipit, sapien sit amet sagittis
        bibendum, neque velit sodales erat, vitae convallis metus turpis vitae
        dolor. Maecenas vel ipsum tincidunt mauris faucibus tincidunt. In
        egestas, arcu eu finibus faucibus, felis massa volutpat felis, ac
        hendrerit nulla dui in ante. Duis at faucibus enim.
      </div>
    </div>
  );
};

export default Dashboard;
