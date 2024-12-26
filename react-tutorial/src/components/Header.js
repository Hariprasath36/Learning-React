function Header (){
    const MyStyle = {
        color: 'yellow',
        backgroundColor: 'black',
        padding: '20px',
        fontFamily: 'cursive',
        textAlign: 'center'
       
    }
    return (
        <div>
            <h1 style={(MyStyle)}>Header</h1>
            <p style={(MyStyle)}>React is a JavaScript library for building user interfaces </p>
        </div>
    )
}

export default Header