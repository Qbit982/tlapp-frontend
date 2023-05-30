import {css} from "@emotion/css";
import {NavLink} from "react-router-dom";

const rootStyle = css`
  height: 80px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-bottom: 1px solid #e4e6e7;

  a {
    color: #000000;
    text-decoration: none;

    font-size: 16px;
    font-weight: 600;

    :hover {
      color: #333333;
    }
  }
`;

export const Header = () => {
    return (
        <header className={rootStyle}>
            <NavLink to={'/'}>Главная страница</NavLink>
            <NavLink to={'/order'}>Товар</NavLink>
        </header>
    );
};
