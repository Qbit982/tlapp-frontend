import React, {useState} from "react";
import {css} from "@emotion/css";

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

type Order = {
    id: string;
    size: string;
    to: string;
}

export const Order = () => {
    const [to, setTo] = useState<string>('non');
    const [size, setSize] = useState<string>('non');
    const [id, setId] = useState<string>();
    const [dirty, setDirty] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const handleSearch = () => {
        const orders = (JSON.parse(localStorage.getItem('order')) ?? []) as Order[];

        console.log(orders)
        const f = orders.find((el) => el.id === id);

        if (f) {
            setSize(f.size);
            setTo(f.to)
        } else {
            setSize('non');
            setTo('non');
        }

        setDirty(true);
    };

    const isValid = to !== 'non' && size !== 'non';
    const isError = to === 'non' && size === 'non' && !dirty;

    return (
        <div>
            <div className={formStyle}>
                <label>
                    Введите номер заказа
                    <input type={'text'} value={id} onChange={handleChange} placeholder={'Номер заказа'} />
                </label>
                <button onClick={handleSearch}>
                    Поиск
                </button>
                { isValid && (
                    <>
                        <h1>
                            Нашлось!
                        </h1>
                        <span>
                            ID - {id}
                        </span>
                        <span>
                            Размер - {size}
                        </span>
                        <span>
                            Куда - {to}
                        </span>
                    </>
                )}
                { isError &&
                    <>
                        <h1>
                          Ничего не нашлось(
                        </h1>
                    </>
                }
            </div>
        </div>
    )
};