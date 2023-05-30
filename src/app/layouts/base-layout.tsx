import {Outlet} from "react-router-dom";
import {css} from "@emotion/css";


import {Header} from "../../widgets/header.tsx";
import {Footer} from "../../widgets/footer.tsx";

const mainStyle = css`
  padding: 32px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseLayout = () => {
    return (
        <>
            <Header />
            <main className={mainStyle}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
