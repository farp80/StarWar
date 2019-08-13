const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch("https://swapi.co/api/people")
					.then(response => response.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => {
						console.log(error);
					});
			},
			getPlanets: () => {
				fetch("https://swapi.co/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
