import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #6f8ba4;
  align-items: center;

  &:active {
    color: #41addd;
  }
`;
