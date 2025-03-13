import axios, { Canceler } from "axios"
import { useEffect, useState } from "react"

interface IUseCategory<T> {
	loading: boolean
	error: boolean
	resultData: T
	hasMore: boolean
}

export default function useRickAndMortyApi<T>(path: string, page?: number): IUseCategory<T> {

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [resultData, setData] = useState<T | T[]>()
	const [hasMore, setHasMore] = useState(false)

	useEffect(() => {
		setData(undefined)
	}, [path])

	let cancel: Canceler

	useEffect(() => {
		setLoading(true)
		setError(false)
		axios({
			method: 'GET',
			url: `https://rickandmortyapi.com/api/${path}`,
			params: { page },
			cancelToken: new axios.CancelToken((c) => cancel = c)
		}).then(({ data }) => {

			const result = data.results ? data.results : data

			setData((prevState) => {
				if (Array.isArray(prevState) && page && page > 1)
					return [...new Set([...prevState, ...result])]

				return result
			})

			
			if (page && page > 0)
				setHasMore(page < data.info.pages)


			setLoading(false)
		}).catch(e => {
			if (axios.isCancel(e))
				return
			setError(true)
			setLoading(false)
			console.error(e)
		})

		return () => cancel()
	}, [page, path])

	return {
		loading,
		error,
		resultData: resultData,
		hasMore
	}
}