import React from "react";
import "./style.scss";
import logo from "../../mandu.svg";
import logoBlack from "../../assets/image/mandu-black.svg";

import { DownOutlined } from "@ant-design/icons/lib/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-content-left">
          <div className="logo">
            <img src={logo} alt="Mandu"></img>
          </div>
          <div className="header-nav">
            <button className="btn-text ">Dashboard</button>
            <button className="btn-text ">Organización</button>
            <button className="btn-text ">
              Modelos <DownOutlined />
            </button>
            <button className="btn-text ">
              Seguimiento <DownOutlined />
            </button>
          </div>
        </div>

        <div className="header-content-right">
          <div className="header-nav">
            <button className="btn-text ">
              <div className="avatar">A</div>
              <div>Administrador</div> <DownOutlined />
            </button>
          </div>
          <div className="logo">
            <img src={logoBlack} alt="Mandu"></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
