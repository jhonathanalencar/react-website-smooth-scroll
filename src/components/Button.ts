import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)<{
  primary?: boolean,
  big?: boolean,
  dark: boolean, 
  fontBig?: boolean
}>`
  border-radius: 50px;
  background: ${({primary}) => primary ? '#01bf71' : '#010606'};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => dark ? '#010606' : '#fff'};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover{
    transition: all .2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
  }
`;