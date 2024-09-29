// import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, SubMenu, MenuItem, } from "react-pro-sidebar";
// import MenuIcon from '@mui/icons-material/Menu';
import { useState} from 'react';
import { Route, Routes , useNavigate  } from "react-router-dom";
import Introduction from './Pages/Introduction';
import ReactComponents from './Pages/ReactComponents';
import Hello from './Pages/Hello';
import ReactFeatures from './Pages/ReactFeatures'
import SearchAppBar from './Pages/Search';
import React from "react";
import Fuse from "fuse.js";
import { menuConfig } from './Pages/reducedMenuConfig';
import CloseIcon from '@mui/icons-material/Close';
import Welcome from './Pages/Welcome';
import ReactProps from './Pages/ReactProps'



  // Flatten the menuConfig to include submenu items directly
const reducedMenuConfig = menuConfig.flatMap((item) => {
      const mainItem = {id: item.id, title: item.title, icon: item.icon, componentName: item.componentName};

      if(item.subMenu){
        return [mainItem, ...item.subMenu];
      }
      else{
        return mainItem;
      }
      
    });

function App() {

const [collapsed, setCollapsed] = useState(true);
const [dialogPop, setDialogPop] = useState(false);
const [searchResults, setSearchResults] = useState(reducedMenuConfig);
const [currentIndex, setCurrentIndex] = useState(0);

const navigate = useNavigate();

   const handleMouseOut = () =>
    {
    setCollapsed((current) => !current);

  }
  const handleDialog = () =>
  {
  setDialogPop((dialogPop) => !dialogPop);
  }


  const fuse = new Fuse(reducedMenuConfig, {
  keys: [
      "id",
      "title",
      "componentName",
  ]
  })
  const handleSearch = (event) => 
  {
    const { value } = event.target;

    // If the user searched for an empty string,
    // display all data.
    
    if(value.length > 0)
    {
    setDialogPop(true); 
    const results = fuse.search(value);
    console.log(results);
    console.log(dialogPop);
    const items = results.map((result) => result.item);
    setSearchResults(items);
    console.log(setSearchResults);
    }
    else
    {
      setDialogPop(false); 
      return;
    }
   
    // if(value.length === 0)
    // {
    //   setDialogPop(false); 
    //   return;
    // }
    // else 
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevComponentName = reducedMenuConfig[prevIndex].componentName;
      navigate(`${prevComponentName}`);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex < reducedMenuConfig.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextComponentName = reducedMenuConfig[nextIndex].componentName;
      navigate(`${nextComponentName}`);
    }
  };
  

 
  return (
    <>
    <div>  
    <SearchAppBar 
    handleSearch = {handleSearch} 
    handlePrevClick = {handlePrevClick} 
    handleNextClick={handleNextClick}
    Welcome={() => {
      setCurrentIndex(0);
      navigate("/");
    }} 
    handleMouseOut = {handleMouseOut}/>
   </div>

    <div id="app" style={({ height: "150vh",  width:"70%" }, { display: "flex" , flexDirection: "row"})}>
     
   
        <Sidebar 
          id="Sidebar" 
          breakPoint="sm"
          transitionDuration={800} 
          backgroundColor="rgb(25,118,210)" 
          style={{ color: "white" }}   
          collapsed = {collapsed} 
        >
          
        <Menu >
          {menuConfig.map((menuItem) => (
            <React.Fragment key = {menuItem.id}>
            {menuItem.subMenu ? (
              <SubMenu
              label= {menuItem.title} 
              icon={menuItem.icon} 
              onClick={() => navigate(menuItem.componentName)
                } 
              >
            {menuItem.subMenu.map((subMenuItem) => (
              <MenuItem
              key={subMenuItem.id} 
                  label= {subMenuItem.title} 
                  icon={subMenuItem.icon} 
                  onClick={() => navigate(subMenuItem.componentName)}
                  >
                    {subMenuItem.title}
              </MenuItem>
            ))}
            </SubMenu>
            ) : (
              <MenuItem
              icon = {menuItem.icon}
              onClick={() => navigate(menuItem.componentName)}
              >
                {menuItem.title}
                </MenuItem>
            )}
             </React.Fragment>
          ))}
          </Menu>
        </Sidebar>
            {/* Null check enanu paaru
            { reducedMenuConfig.map((menuItem, id) => (
              key={menuItem.id} 
              <SubMenu 
                {menuItem.subMenu ? (
                label= {menuItem.title} 
                icon={menuItem.icon} 
                onClick={() => navigate(menuItem.componentName)}
                
              >             
                
                {menuItem.subMenu && menuItem.subMenu.map((subMenuItem, subId) => (
                <MenuItem 
                  key={subId} 
                  label= {subMenuItem.title} 
                  icon={subMenuItem.icon} 
                  onClick={() => navigate(subMenuItem.componentName)} > 
                </MenuItem>
                ))}
              </SubMenu>
              ))} 
              </Menu>
              </Sidebar>
            */}
      
      <main 
            style={{position:"relative", 
            height:"150vh", 
            overflow: 'auto', 
            color: "black", 
            marginTop:"1rem", 
            marginLeft: "3rem", 
            marginRight:"2rem",
            width:'100%'}}  
        >
      <div id="dropdown" 
          style ={{display: dialogPop ? "block" : "none"}}>
      <table>
      <tbody>
        <CloseIcon 
        sx={{ fontSize: 10, 
        position: 'sticky', 
        marginLeft: '250px', 
        marginBottom: '0px'}} 
        onClick={handleDialog}>
        </CloseIcon>
      
        {searchResults.map((menuItem, id) => (
        <tr 
          key={id} 
          onClick={() => {navigate(menuItem.componentName);
            console.log('id');
          }}
        >
          <td>
            {menuItem.title}
          </td>
        </tr>
        ))} 
      </tbody>
      </table>
    </div>
   
    <Routes>
      {/* <Route path = "/" element = {<Home />} /> */}
      <Route path="/" element={<Welcome />} />
      <Route path = "/Pages/Introduction" element ={<Introduction />} />
      <Route path = "/Pages/ReactFeatures" element ={<ReactFeatures />} />
      <Route path = "Pages/ReactComponents" element ={<ReactComponents />} />
      <Route path = "Pages/Hello" element ={<Hello />} />
      <Route path = "Pages/ReactProps" element ={<ReactProps />} />
    </Routes>
    </main>
    </div>
    </>
  );
}

export default App;
