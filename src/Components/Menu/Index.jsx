import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

export default function Menu() {
    return(
        <>
        <Container>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/erro" >Error</Link></li>
            </ul>
        </Container>
        </>
    )
}