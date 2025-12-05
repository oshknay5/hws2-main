import React from 'react'
import upIcon from './up.svg'
import downIcon from './down.svg'
import noneIcon from './up-down.svg'


// добавить в проект иконки и импортировать
// Или символы Unicode:

// const downIcon = "↓"
// const upIcon = '↑'
// const noneIcon = '↕'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return down        // Первый клик - сортировка по убыванию
    if (sort === down) return up        // Второй клик - сортировка по возрастанию
    if (sort === up) return ''          // Третий клик - сброс сортировки
    return down                         // По умолчанию - сортировка по убыванию

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon      // Иконка ↓ (сортировка по убыванию)
        : sort === up
            ? upIcon    // Иконка ↑ (сортировка по возрастанию)
            : noneIcon  // Иконка ↕ (без сортировки)

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort icon"
                style={{ cursor: 'pointer', marginLeft: '5px' }}
            />
        </span>
    )
}

export default SuperSort
