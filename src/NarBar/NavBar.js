import "./styles.css";
function  NavBar(){
    return(
        <div className="navbarBaseContainer">
            <div className="navbarPageContainer">
                <span>Users</span>
                <span></span>
                 <span></span>
                 <span></span>
                 <span>help</span> 
            </div>
            <div className="navbarButtonContainer">
                <button>log out</button>
            </div>
        </div>
    )
}

export default NavBar;

