import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {  Tab, Menu, Icon } from "semantic-ui-react";
import Character from './CharacterPage';
import LocationPage from './LocationPage';
import EpisodePage from './EpisodePage';
import WelcomePage from './WelcomePage';

function TabNav() {
   return (
<div>
<ul>
 <li>
   <NavLink exact to="/">
     Home
   </NavLink>
 </li>
 <li>
   <NavLink to="/CharacterPage" >
   Character
   </NavLink>
 </li>
 <li>
   <NavLink to="/EpisodePage">
    Episodes
    </NavLink>
 </li>
 <li>
   <NavLink to="/LocationPage"> 
   Location 
   </NavLink>
 </li>
</ul>
   
   </div>
 );
}
export default TabNav;


// // function TabNav() {
// //     const [key, setKey] = useState('home');
  
// //     return (
// //       <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
// //         <Tab eventKey="home" title="Home">
// //           <Sonnet />
// //         </Tab>
// //         <Tab eventKey="profile" title="Profile">
// //           <Sonnet />
// //         </Tab>
// //         <Tab eventKey="contact" title="Contact" disabled>
// //           <Sonnet />
// //         </Tab>
// //       </Tabs>
// //     );
// //   }
  
// //   render(<TabNav />);

// // export default TabNav;
// // const panes = [
// //     { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
// //     { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
// //     { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
// //   ]
  
// //   const TabExampleBasic = () => <Tab panes={panes} />
  
// //   export default TabExampleBasic;




// function TabNav(props) {
//     const [nav, setNav] = useState('home');
  
//     useEffect(() => {
//       document.title = `You clicked ${count} times`;
//     });
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setNav()}>
//           Click me
//         </button>
//       </div>
//     );
//   }
//   export default TabNav;