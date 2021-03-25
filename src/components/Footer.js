import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <spam>made with Shadow Magic by Dreadsyl</spam> 
            <br />
            <spam>Copyright © {year}</spam>
        </div>
    )
}

export default Footer;