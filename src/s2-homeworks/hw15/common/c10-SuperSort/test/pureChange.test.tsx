// import React from 'react'
// import {pureChange} from '../SuperSort'
//
// test('sort ""', () => {
//     const newSort = pureChange('', '1a', '0a')
//     expect(newSort).toBe('1a')
// })
// test('sort "1a"', () => {
//     const newSort = pureChange('1a', '1a', '0a')
//     expect(newSort).toBe('0a')
// })
// test('sort "0a"', () => {
//     const newSort = pureChange('0a', '1a', '0a')
//     expect(newSort).toBe('')
// })
// test('sort "1b"', () => {
//     const newSort = pureChange('1b', '1a', '0a')
//     expect(newSort).toBe('1a')
// })
import {pureChange} from "@homeworks/hw15/common/c10-SuperSort/SuperSort";

test('sort not equal to down or up values', () => {
    const newSort = pureChange('1b', '1a', '0a')
    expect(newSort).toBe('1a')
})

test('sort empty string with different down value', () => {
    const newSort = pureChange('', 'desc', 'asc')
    expect(newSort).toBe('desc')
})

test('cycle through all states with custom values', () => {
    // Начальное состояние
    expect(pureChange('', 'desc', 'asc')).toBe('desc')
    // После первого клика
    expect(pureChange('desc', 'desc', 'asc')).toBe('asc')
    // После второго клика
    expect(pureChange('asc', 'desc', 'asc')).toBe('')
    // После третьего клика (сброс)
    expect(pureChange('', 'desc', 'asc')).toBe('desc')
})

test('sort with numeric values', () => {
    const newSort = pureChange('10', '10', '01')
    expect(newSort).toBe('01')
})