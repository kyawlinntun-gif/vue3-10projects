import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            isAuth: false,
            authUser: {},
            openModal: false
        }
    },
    mutations: {
        setIsAuth(state, payload) {
            state.isAuth = payload;
        },
        getAuthUser(state, payload) {
            state.authUser = payload;
        },
        setLoginModal(state, payload) {
            state.openModal = payload;
        }
    }
});

export default store;