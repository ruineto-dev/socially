import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomizedLink = styled(Link)`
  font-size: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #d4993d;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: #9e6c22;
  }

  text-decoration-line: underline;
  text-align: center;
`;

export default CustomizedLink;
