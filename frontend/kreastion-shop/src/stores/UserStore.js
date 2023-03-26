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
        login(email, password) {
            fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
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
            fetch(`${API_URL}/checkin`, {
                credentials: 'include'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data._id) this.user = data;
                });
        },
        logout() {
            fetch(`${API_URL}/logout`, {
                credentials: 'include',
            })
                .then((response) => {
                    if (response.status == 200) {
                        console.log('LGOUT 200');
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