
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { CalendarIcon, EditIcon, AtSignIcon, InfoIcon, ViewIcon,ViewOffIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom"


export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="create">
          <ListIcon as={EditIcon} color="white" />
          Admissions
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="profile">
          <ListIcon as={ViewOffIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="TeacherProfile">
          <ListIcon as= {InfoIcon} color="white" />
          Teacher Profile
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="StudentProfile">
          <ListIcon as={AtSignIcon} color="white" />
          Student Profile
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="Academics">
          <ListIcon as={ViewIcon} color="white" />
          Academics Reports
        </NavLink>
      </ListItem>
      
    </List>
  )
}