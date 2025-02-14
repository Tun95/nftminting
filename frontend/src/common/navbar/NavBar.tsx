import { MingcuteWallet3Fill } from "../../assets/icons/Index";
import "./styles.scss";
import logo from "../../assets/nav/logo.png";

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="container">
        <div className="content c_flex">
          <div className="left">
            <div className="img l_flex">
              <img src={logo} alt="logo img" />
            </div>
          </div>
          <div className="right">
            <div className="btn l_flex">
              <button className="main_btn a_flex">
                <MingcuteWallet3Fill className="icon" />
                <p>Connect Wallet</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
