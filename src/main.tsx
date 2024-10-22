import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import "animate.css";

import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, } from 'react-router-dom';
import { TaskMe } from 'TaskMe';








createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <TaskMe/>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
