import {css} from "@emotion/css";

const rootStyle = css`
  position: absolute;
  bottom: 0;
  right: 0;

  height: 80px;
  width: 100%;

  color: #FFFFFF;
  background-color: #2B2B2B;

  display: flex;
  justify-content: center;
`;

const innerStyle = css`
  width: 60%;
  
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 8px;
`;

export const Footer = () => {
    return (
        <footer className={rootStyle}>
            <div className={innerStyle}>
                <div className={infoStyle}>
                    <span>
                        Грузоперевозки от Рената Мамадалиева
                    </span>
                    <span>
                        Время работы: Каждый день с 00:00 до 00:00
                    </span>
                </div>
                <span>
                    + 7 (932) 899 75-67
                </span>
            </div>
        </footer>
    );
};
