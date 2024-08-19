import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { ReduxProvider } from "./ReduxProvider";


// import other providers as needed

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
        <ReactQueryProvider>
          {/* wrap other providers around children */}

          {children}
        </ReactQueryProvider>
    </ReduxProvider>
  );
};

export default MainProvider;
