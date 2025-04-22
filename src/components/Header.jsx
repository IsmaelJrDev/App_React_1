const Header = (props) => {
    return (
        <header 
        className="bg-indigo-800 w-full text-center text-white px-4 py-2 font-bold text-2xl shadow">
            Bienvenido {props.user.username}
        </header>
    )
}

export default Header;