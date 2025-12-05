import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount/itemsCountForPage)// 10 пишет студент // вычислить количество страниц

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement> ) => {
        // пишет студент
        const newCount = Number(event.target.value)

        onChange(1, newCount) // При изменении количества элементов на странице переходим на 1ю страницу

    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{ //стили пишет студент
                    '& .MuiPaginationItem-root': {
                        fontSize: '13px',
                        fontFamily: "'Segoe UI', sans-serif",
                        fontWeight: 400,
                        color: '#666666',
                        minWidth: '24px',
                        height: '24px',
                        margin: '0 1px',
                        borderRadius: '0',
                        border: 'none',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: '#F0F0F0',
                        },
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: '#0078D4',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#106EBE',
                        },
                    },
                    '& .MuiPaginationItem-root.Mui-disabled': {
                        color: '#CCCCCC',
                        backgroundColor: 'transparent',
                    },
                    '& .MuiPaginationItem-ellipsis': {
                        color: '#666666',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
