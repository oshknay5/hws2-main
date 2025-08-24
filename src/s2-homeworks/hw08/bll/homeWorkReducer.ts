import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType ): UserType[]=> { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
                // Создаем копию массива чтобы избежать мутации
                const sortedState = [...state];
                if (action.payload === 'up') {
                    // Сортировка A-Z
                    return sortedState.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    // Сортировка Z-A
                    return sortedState.sort((a, b) => b.name.localeCompare(a.name));
                }
            }// need to fix
        case 'check': {
            return state.filter((u:UserType) => u.age >= action.payload )    // need to fix
        }
        default:
            return state
    }
}
