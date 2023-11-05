'use client'

import { useSession, signOut } from 'next-auth/react'
import NewChat from './NewChat'


function Sidebar() {

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />

                    <div className='hidden sm:inline'>
                    
                    </div>
                   <div className='flex flex-col space-y-2 my-2'>
                    </div>
                </div>
            </div>
            
             
            
        </div>
    )
}

export default Sidebar