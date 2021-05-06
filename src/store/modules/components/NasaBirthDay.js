
import axios from 'axios';

export default {
    namespaced: true,
	state:{
        nasaFoto:null
	}, 
	getters:{
		// Here we will create a getter
	},
	mutations:{

		setNasaPhoto(state, data) {
			state.nasaFoto = data
		},
	},
	actions:{

		getNasaPhoto({ commit },param) {
			commit('general/setMostrarLoader', true, { root: true });

			let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+param.fecha;

				axios.get(url)
				.then(response => {
					commit('setNasaPhoto', response.data);
					commit('general/setMostrarLoader', false, { root: true });
				}).catch(error => {
					commit('general/setMostrarLoader', false, { root: true });
					console.log(error);
					alert("Problemas para cargar los datos");

				})	

		},

	},

}