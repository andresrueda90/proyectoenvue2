import axios from 'axios';
import { apiSuperHero } from '@/data/variablesGlobales' 

export default {
    namespaced: true,
	state:{
        superHeroData:[],
        superHeroDataSearched:[]
	}, 
	getters:{
		// Here we will create a getter
	},
	mutations:{

        setSuperHerobyId(state, data) {
			state.superHeroData = data
		},

        setSuperHerobyName(state, data) {
			state.superHeroDataSearched = data.results
		}


	},
	actions:{

        getSuperHerobyId({ commit },param) {
			commit('general/setMostrarLoader', true, { root: true });

            let id=param.id
			let url = apiSuperHero.url+ apiSuperHero.token +"/"+id;

            axios.get(url)
            .then(response => {
                commit('setSuperHerobyId', response.data);
                commit('general/setMostrarLoader', false, { root: true });
            }).catch(error => {
                commit('general/setMostrarLoader', false, { root: true });
                console.log(error.messages);
            })	
		},

        getSuperHerobyName({ commit },param) {
			commit('general/setMostrarLoader', true, { root: true });

            let name=param.name
			let url = apiSuperHero.url+ apiSuperHero.token +"/search/"+name;

            axios.get(url)
            .then(response => {
                commit('setSuperHerobyName', response.data);
                commit('general/setMostrarLoader', false, { root: true });
            }).catch(error => {
                commit('general/setMostrarLoader', false, { root: true });
                console.log(error.messages);
            })	
		},


	},

}