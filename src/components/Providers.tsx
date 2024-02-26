//now to implement react toast we are going to need to use context . And that can only be done from client side and not from server side 
//thats why we need to warp the client side rendered component by the context 
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
        {children}
    </>
}

export default Providers