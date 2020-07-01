import Vue from "vue"
import Vuex from "vuex"
import { http } from "@/api"
import axios from 'axios'
import qs from 'query-string'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        users: [],
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
        SELECT_USER(state, payload) {
            state.users = payload;
        },
        DELETE_USER(state, user_id) {
            const index = state.users.findIndex((t) => t.id === user_id);
            state.users.splice(index, 1);
        },
        UPDATE_USER(state, userinfo) {
            const index = state.users.findIndex((t) => t.id === userinfo.id);
            state.users[index] = userinfo
        },
        INSERT_USER(state, payload) {
            state.users.push(payload);
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
            const res = await http.get("/sample/userinfo/db2/get");
            if (res.status === 200) {
                commit('SET_TODOS', res.data);
            }
        },
        async removeTodo({ commit }, todoId) {
            const res = await http.remove(`/sample/userinfo/db2/rmtodo/${todoId}`);
            if (res.status === 200) {
                commit('DELETE_TODO', todoId);
            }
        },
        async saveTodo({ commit }, todo) {
            const res = await http.post('/sample/userinfo/db2/savetodo', todo)
            if (res.status === 200) {
                commit('UPDATE_TODO', res.data)
            }
        },
        async addTodo({ commit }, payload) {
            const res = await http.add('/sample/userinfo/db2/addtodo', payload)
            if (res.status === 200) {
                commit("ADD_TODO", res.data);
            }
        },
        async sendwait(context, todo) {
            const res = await http.post('/sample/userinfo/sendwait', todo)
            if (res.status === 200) {
                return res.data
            }
        },
        async selectUsers({ commit }) {
            const res = await http.get("/sample/userinfo/db2/getuser");
            if (res.status === 200) {
                commit('SELECT_USER', res.data);
            }
        },
        async deleteUser({ commit }, user_id) {
            const res = await http.remove(`/sample/userinfo/delete/${user_id}`);
            if (res.status === 200) {
                commit('DELETE_USER', user_id);
            }
        },
        async updateUser({ commit }, users) {
            const res = await http.post('/sample/userinfo/update', users)
            if (res.status === 200) {
                commit('UPDATE_USER', res.data)
            }
        },
        async insertUser({ commit }, payload) {
            const res = await http.add('/sample/userinfo/insert', payload)
            if (res.status === 200) {
                commit("INSERT_USER", res.data);
            }
        }
    },
    modules: {},
});