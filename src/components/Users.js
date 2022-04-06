import { useState, useEffect } from 'react';
import User from './User.js';
import { UsersService } from '../Services/usersServ.js';

export default function Users() {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        UsersService.getAllUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {
           users && users.map(user => <User key={user.id} user={user} />)
            }
        </div>
    );
}; 