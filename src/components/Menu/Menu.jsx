import './menu.scss'

export default function Menu({menuState,setMenuState}) {
  return (
    <div className={"menu "+(menuState && "active")}>
        <ul>
            <li onClick={()=>setMenuState(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuState(false)}>
            <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuState(false)}>
            <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuState(false)}>
            <a href="#about">About</a>
            </li>
            <li onClick={()=>setMenuState(false)}>
            <a href="#skills">Skills</a>
            </li>
            <li onClick={()=>setMenuState(false)}>
            <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
