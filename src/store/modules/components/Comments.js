import axios from 'axios';
import { apiPost } from '@/data/variablesGlobales' 

export default {
    namespaced: true,
	state:{
		comments:[],
	}, 
	getters:{
		// Here we will create a getter
	},
	mutations:{
		setComments(state, comments) {
			state.comments = comments
		}
	},
	actions:{
		getComments({ commit },param) {
			commit('general/setMostrarLoader', true, { root: true });

			let url = apiPost.url+"/posts/"+param.idComments+"/comments";
			setTimeout(() => {
				axios.get(url)
				.then(response => {
					commit('setComments', response.data);
					commit('general/setMostrarLoader', false, { root: true });
				}).catch(error => {
					commit('general/setMostrarLoader', false, { root: true });
					console.log(error);
					alert("Problemas para cargar los comentarios");

				})	
			}, 1000);

		},
	},

}