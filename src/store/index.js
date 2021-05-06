import Vue from 'vue'
import Vuex from 'vuex'

import comentarios from './modules/components/Comments'
import listpost from './modules/components/ListPost'
import user from './modules/components/User'
import nasa from './modules/components/NasaBirthDay'
import listsuperhero from './modules/components/ListSuperHero'
import general from './modules/General'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		comentarios,
		listpost,
		general,
		user,
		listsuperhero,
		nasa
	},

})