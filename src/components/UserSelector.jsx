const UserSelector = ({users, newUser}) => {
    return (
        <ul className="flex w-full justify-center gap-4 flex-wrap border border-indigo-800 rounded text-indigo-800">
            {
                users.map(
                    (user)=>{
                        return (
                            <li key={user.id} onClick={
                                ()=>newUser(user.id)
                            }>{user.username}</li>
                        )
                    })
            }
        </ul>
    )
}   

export default UserSelector;