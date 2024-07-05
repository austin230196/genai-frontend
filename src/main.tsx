import React from 'react'
import {createRoot} from 'react-dom/client'
import {Bounce, ToastContainer} from "react-toastify";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from "styled-components";
import 'react-loading-skeleton/dist/skeleton.css'

import App from './App.tsx'
import './global.css'
import theme from './theme.ts';



const el = document.getElementById('root')!;
if(!el.innerHTML){
  const root = createRoot(el);
  const queryClient = new QueryClient({
    defaultOptions: {}
  })

  root.render(
    <React.StrictMode>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
