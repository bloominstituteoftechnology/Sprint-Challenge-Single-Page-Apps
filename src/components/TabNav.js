import React from "react";
import { Breadcrumb, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import '../index.css';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    return(
        <>
        <NavLink className='links' to='/characters'>Characters</NavLink>
        <NavLink className='links' to='/locations'>Locations</NavLink>
        <NavLink className='links' to='/episodes'>Episodes</NavLink>
        </>
    )
};
