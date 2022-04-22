import React from 'react'

function Comments({ comments }) {
    const { postId, id, name, email, body } = comments
    return (
        <div>
            postId: {postId}
            id:{id}
            name: {name}
            email:{email}
            body:{body}
        </div>
    )
}

export { Comments }


