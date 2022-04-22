import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { UserDetails } from '../../components'
import { userService } from '../../services'

function SingleUserPage() {
    const { state } = useLocation()
    const { userId } = useParams()
    const [user, setUser] = useState(state)
    useEffect(() => {
        if (!state) {
            userService.getById(userId).then(({ data }) => setUser(data))
        } else {
            setUser(state)
        }

    }, [userId, state])

    return (
        <div>
            <div>      
                  {user && <UserDetails key={user.id} user={user} />}
            </div>
           <Outlet />
        </div>

    )
}

export { SingleUserPage }