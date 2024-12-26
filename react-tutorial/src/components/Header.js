import './Header.css'
import gif from './Header.module.css'
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
            <h2 className={gif.he}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</h2>
        </div>
    )
}

export default Header