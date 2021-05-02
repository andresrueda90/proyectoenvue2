
export default {
    namespaced: true,
	state:{
		level:"Este texto viene del Store",
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