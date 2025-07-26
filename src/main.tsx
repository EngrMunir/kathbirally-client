import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'sonner'
import router from './routes/routes.tsx'
import { persistor, store } from './redux/features/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div  className='max-w-6xl mx-auto'> */}
    <div  className='mx-auto'>
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>  
      </PersistGate>
      <Toaster/>
    </Provider>
    </div>
  </StrictMode>,
)