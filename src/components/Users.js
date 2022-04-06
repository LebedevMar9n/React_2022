 import { useState,useEffect } from 'react'
 import User from './User'

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
     
    }, [])
    

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}; 