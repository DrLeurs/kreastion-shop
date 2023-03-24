import { defineStore } from 'pinia'
import router from '../router';

const API_URL = import.meta.env.VITE_API_URL;

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: {}
        }
    },

    actions: {
        login(username, password) {
            fetch(`${API_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data._id) this.user = data;
                    router.push('/');
                });
        },
        checkin() {
            fetch(`${API_URL}/user/checkin`)
                .then((response) => response.json())
                .then((data) => {
                    if (data._id) this.user = data;
                });
        },
        logout() {
            console.log('LGOUT');
            fetch(`${API_URL}/user/logout`)
                .then((response) => {
                    if (response.status == 200) {
                        this.user = {};
                        router.push('/');
                    }
                });
        }
    },

    getters: {
        isAuthenticated: (state) => {
            return state.user._id ? true : false;
        }
    }
})