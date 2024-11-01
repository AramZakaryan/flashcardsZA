// src/App.tsx

import { Router } from '@/routes/Router'
import { Provider } from 'react-redux'
import { store } from '@/services/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router />
    </Provider>
  )
}
