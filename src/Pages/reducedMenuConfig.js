import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";


export const menuConfig = 
[
    {
      id: 1,
      title: "React Basics",
      componentName: "/Pages/Hello",
      icon: <AddReactionOutlinedIcon />,

      subMenu: [
        { id: 11, title: "Introduction", icon:"", componentName: "/Pages/Introduction"},
        { id: 12, title: "React Features",icon:"",componentName: "/Pages/ReactFeatures"},
        { id: 13, title: "React Components", icon:"", componentName: "/Pages/ReactComponents" },
         ],
    },
    {
      id: 2,
      icon: <PeopleOutlinedIcon />,
      title: "React Props",
      componentName: "/Pages/ReactProps", 
    }, ]


    