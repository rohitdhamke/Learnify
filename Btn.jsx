import React from "react";

const Btn = ({  onClick, classname, icon}) => {
    return (
        <button className={classname}
            
            onClick={onClick}
            style={{
                padding: "10px 13px",
                background: "#aca8ebff",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "16px",
            }}
        >
            <img src={icon} alt="theme-toggle" style={{ width: "22px", height: "22px" }} />
        </button>
    );
};

export default Btn;
