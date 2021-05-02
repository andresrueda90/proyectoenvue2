import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		level:"Este texto viene del Store",
		count:0,
		posts: [],
		comments:[]
	}, 
	getters:{
		// Here we will create a getter
	},
	mutations:{
		increment (state) {
			state.count++
		},

		setPost(state, posts) {
			state.posts = posts
		},

		setComments(state, comments) {
			state.comments = comments
		}
	},
	actions:{
		getPosts({ commit }) {
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
			commit('setPost', response.data)
			})
		},

		getComments({ commit },param) {
			let url = "https://jsonplaceholder.typicode.com/posts/"+param.idComments+"/comments";
			axios.get(url)
			.then(response => {
			commit('setComments', response.data)
			})
		},
	},

})