import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavItemsTopContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  list-style-type: none;
  background-color:{props => props.bgColor};
`
export const LinkItem = styled(Link)`
  width: 100%;
  height: 35px;
  text-decoration: none;
`

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  cursor: pointer;
  padding-left: 10px;
`
export const NavText = styled.p`
  font-size: 12px;
  padding-left: 10px;
`
