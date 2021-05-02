import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import Commentarios from './modules/Comments'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Commentarios,
	},
	state:{
		level:"Este texto viene del Store",
		count:0,
		posts: [],
		comments:[],
		mostrarLoader:false
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
		getPosts({ commit,state }) {
			state.mostrarLoader=true;
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				commit('setPost', response.data);
				state.mostrarLoader=false;
			}).catch(error => {
				state.mostrarLoader=false;
				console.log(error);
				alert("Problemas para cargar los comentarios");

			})
		},

		getComments({ commit, state },param) {
			state.mostrarLoader=true;

			let url = "https://jsonplaceholder.typicode.com/posts/"+param.idComments+"/comments";
			setTimeout(() => {
				axios.get(url)
				.then(response => {
					commit('setComments', response.data);
					state.mostrarLoader=false;
				}).catch(error => {
					state.mostrarLoader=false;
					console.log(error);
					alert("Problemas para cargar los comentarios");

				})	
			}, 1000);

		},
	},

})