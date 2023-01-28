import React from "react";
import {MdOutlineDashboard} from "react-icons/md"
import {HiOutlineHome} from "react-icons/hi"

import * as C from "./styles"


const Sidebar = () => {
    return (
        <div>
        <C.Container>
            <C.Logo>
                <MdOutlineDashboard className="logo-icon" />
                <span>Dashboard</span>
            </C.Logo>
        </C.Container>

        <C.Menu>
            {
                menuItens.map((<C.Item>) => (

                      <Link to={`/${item.name}`} key={item.id} style={{textDecoration: 'none'}}>
                        <C.Item>

                        </C.Item>
                    </Link>
                ))
            }
        </C.Menu>
        </div>
    )
}

export default Sidebar;