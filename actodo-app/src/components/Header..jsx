
function Header(props) {
    return (
        <div>
            <h1 className="text-[25px] md:text-3xl font-bold">Hi <span className="text-[#e64242]" style={{textShadow:"0px 1px 2px #FF0000"}}>{props.name}</span>, Welcome to Actodo!</h1>
            <p>I help you manage your activities:)</p>
        </div>
    )
}

export default Header