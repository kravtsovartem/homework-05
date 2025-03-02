interface ICharacter {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	image: string
	created: string
}

interface IEpisode {
	id: number
	name: string
	air_date: string
	episode: string
	created: string
}

interface ILocation {
	id: number
	name: string
	type: string
	dimension: string
	created: string
}

interface ICategory {
	[key: string]: ICharacter[] | IEpisode[] | ILocation[]
	characters: ICharacter[]
	episodes: IEpisode[]
	locations: ILocation[]
}