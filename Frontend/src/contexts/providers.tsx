import React from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { CreateContactProvider } from "./CreateContactContext";
import { EditContactProvider } from "./EditContactContext";
import { GetAllContactsProvider } from "./GetAllContactsContext";
import { LoginProvider } from "./LoginContext";
import { SignUpProvider } from "./SignUpContext";

const Providers = ({ children }: Ichildren) => {
  return (
    <GetAllContactsProvider>
      <LoginProvider>
        <SignUpProvider>
          <CreateContactProvider>
            <EditContactProvider>{children}</EditContactProvider>
          </CreateContactProvider>
        </SignUpProvider>
      </LoginProvider>
    </GetAllContactsProvider>
  );
};

export default Providers;
