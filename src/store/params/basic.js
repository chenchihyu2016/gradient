const initialState = {
    levels: [
        { row: 1, column: 5, difficulty: 1 },
        { row: 1, column: 8, difficulty: 2 },
        { row: 2, column: 5, difficulty: 3 },
        { row: 2, column: 7, difficulty: 4 },
        { row: 3, column: 5, difficulty: 5 },
        { row: 3, column: 6, difficulty: 6 },
        { row: 4, column: 5, difficulty: 7 },
        { row: 4, column: 6, difficulty: 8 },
    ],
    passedLevels: new Array(),
    // passedLevels: [
    //     2, 3, 4, 5, 6, 7, 8
    // ],
};

const getters = {
    getPassedLevels (state) {
        return state.passedLevels;
    },
    getLevels (state) {
        return state.levels;
    }
};

const actions = {

};

const mutations = {
    setDifficulty (state, difficulty) {
        state.passedLevels.push(difficulty);
    }
};

export default {
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations,
}