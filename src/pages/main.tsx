import {css} from "@emotion/css";
import React, {useMemo, useState} from "react"
import { v4 as uuid } from 'uuid';

const rootStyle = css``;

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


export const Main = () => {
    const [to, setTo] = useState<string>('non');
    const [size, setSize] = useState<string>('non');
    const [id, setId] = useState<string>();

    const cost = useMemo(() => {
        let toNumber;
        let sizeNumber;

        switch (to) {
            case 'Большая':
                sizeNumber =  20;
                break;
            case 'Средняя':
                sizeNumber =  10;
                break;
            case 'Маленькая':
                sizeNumber =  5;
                break;
            default:
                sizeNumber =  100;
                break;
        }

        switch (to) {
            case 'Москва':
                toNumber =  10;
                break;
            case 'Санкт-Петербург':
                toNumber =  100;
                break;
            case 'Томск':
                toNumber =  5;
                break;
            default:
                toNumber =  1000;
                break;
        }
        
        return toNumber * sizeNumber;
    }, [size, to]);

    const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTo(event.target.value);
    };

    const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(event.target.value);
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newId = uuid();

        setId(newId);

        const orders = (JSON.parse(localStorage.getItem('orders')) ?? []) as Order[];

        orders.push({
            id: newId,
            size,
            to
        });
        console.log(orders);

        localStorage.setItem('order', JSON.stringify(orders));
    }

    const isValid = to !== 'non' && size !== 'non';

    return (
        <div className={rootStyle}>
            <h1>
                Форма отправки товара
            </h1>
            <div className={formStyle}>
                <label>
                    Город отправления:
                    <select value={to} onChange={handleChangeTo} placeholder={'Выберите город'}>
                        <option value={'non'} label={'Выберите...'} />
                        <option value={'Москва'} label={'Москва'} />
                        <option value={'Санкт-Петербург'} label={'Санкт-Петербург'} />
                        <option value={'Томск'} label={'Томск'} />
                    </select>
                </label>
                <label>
                    Размер посылки:
                    <select value={size} onChange={handleChangeSize} placeholder={'Выберите город'}>
                        <option value={'non'} label={'Выберите...'} />
                        <option value={'Большая'} label={'Большая'} />
                        <option value={'Средняя'} label={'Средняя'} />
                        <option value={'Маленькая'} label={'Маленькая'} />
                    </select>
                </label>
                { isValid &&
                    <>
                        <span>
                            Стоимость отправки равна
                            <h3>
                                ${cost}
                            </h3>
                        </span>
                        <button onClick={handleSubmit}>Отправка товара</button>
                    </>
                }
                { id &&
                    <>
                      <h2>
                        Ваш айди посылки
                      </h2>
                      <span>
                          {id}
                      </span>
                    </>
                }
            </div>
        </div>
    );
};
