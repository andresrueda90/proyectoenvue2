import axios from 'axios';

export default {
    namespaced: true,
	state:{
		posts: [],
	}, 
	getters:{
		// Here we will create a getter
	},
	mutations:{
		setPost(state, posts) {
			state.posts = posts
		},

	},
	actions:{
		getPosts({ commit }) {
			commit('general/setMostrarLoader', true, { root: true });
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				commit('setPost', response.data);
				commit('general/setMostrarLoader', false, { root: true });
			}).catch(error => {
				commit('general/setMostrarLoader', false, { root: true });
				console.log(error);
				alert("Problemas para cargar los comentarios");

			})
		},
	},

}