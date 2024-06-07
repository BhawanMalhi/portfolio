import "./header.scss";

export default function Header({menuState,setMenuState}) {
  return (
    <div className={"header "+(menuState && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BhawanMalhi
          </a>
          <div className="itemContainer">
            <i className="fa-solid fa-user"></i>
            <span>+1(437)997-897</span>
          </div>
          <div className="itemContainer">
            <i className="fa-sharp fa-solid fa-envelope"></i>
            <span>bhawanmalhi29@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="burger" onClick={()=>setMenuState(!menuState)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>


        </div>
      </div>
    </div>
  );
}
