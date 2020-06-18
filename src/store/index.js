import Vue from "vue"
import Vuex from "vuex"
import { http } from "@/api"
import axios from 'axios'
import qs from 'query-string'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        accessToken: null
    },
    mutations: {
        SET_TODOS(state, payload) {
            state.todos = payload;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex((t) => t.id === todoId);
            state.todos.splice(index, 1);
        },
        UPDATE_TODO(state, todo) {
            const index = state.todos.findIndex((t) => t.id === todo.id);
            state.todos[index] = todo
        },
        ADD_TODO(state, payload) {
            state.todos.push(payload);
        },
        LOGIN(state, data) {
            state.accessToken = data.access_token
        },
        LOGOUT(state) {
            state.accessToken = null
        },
    },
    actions: {
        async login({ commit }, data) {
            const params = { grant_type: 'password', username: data.username, password: data.password, ip: data.ip, system: data.system }
            const res = await axios.post('/oauth/token', qs.stringify(params), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                auth: {
                    username: 'testClientId',
                    password: 'testSecret'
                },
            })
            if (res.status === 200) {
                commit('LOGIN', res.data)
            }
        },
        async logout({ commit }) {
            commit('LOGOUT')
        },
        async getTodos({ commit }) {
            const res = await http.get("/sample/todos");
            if (res.status === 200) {
                commit('SET_TODOS', res.data);
            }
        },
        async removeTodo({ commit }, todoId) {
            const res = await http.remove(`/sample/todos/${todoId}`);
            if (res.status === 200) {
                commit('DELETE_TODO', todoId);
            }
        },
        async saveTodo({ commit }, todo) {
            const res = await http.post('/sample/todos', todo)
            if (res.status === 200) {
                commit('UPDATE_TODO', res.data)
            }
        },
        async addTodo({ commit }, payload) {
            const res = await http.add('/sample/todos', payload)
            if (res.status === 200) {
                commit("ADD_TODO", res.data);
            }
        },
        async sendwait(context, todo) {
            const res = await http.post('/sample/todos/sendwait', todo)
            if (res.status === 200) {
                return res.data
            }
        }
    },
    modules: {},
});