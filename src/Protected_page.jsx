import React from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
const Protected_page = () => {
  return (
    <div>
      <SignedIn>
        <h2>Protected Content</h2>
        <p>You are signed in!</p>
      </SignedIn>
      <SignedOut>
        <p>You need to sign in to view this page.</p>
      </SignedOut>
    </div>
  );
};

export default Protected_page;
