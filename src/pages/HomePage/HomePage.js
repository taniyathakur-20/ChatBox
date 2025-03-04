import COLOR from"../../config/color";
import"./styles.css";

function HomePage(){
   return (
    <div className="baseContainer" style={{backgroundColor:COLOR.baseColor}}>
    <h1>Home Page</h1>
    </div>
   );
}

export default HomePage;