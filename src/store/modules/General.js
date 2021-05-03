
export default {
    namespaced: true,
	state:{
		level:"Este texto viene desde Store",
		mostrarLoader:false
	}, 
	getters:{
		// Here we will create a getter
	},
	mutations:{
		setMostrarLoader(state, value) {
			state.mostrarLoader = value
		}
	},
	actions:{

	},

}