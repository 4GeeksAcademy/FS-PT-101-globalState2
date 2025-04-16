import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import contactServices from "../services/contactServices.js";
import { ContactCard } from "../components/contactCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		// loadData()
		loadAgendaBySlug()
	}, [])
	const loadData = async () => {
		try {
			const resp = await contactServices.getAgendas();
			dispatch({ type: 'get_agendas', payload: resp.agendas })
		} catch (error) {
			console.log(error);
		}
	}

	const loadAgendaBySlug = async () => {
		try {
			const resp = await contactServices.getOneAgenda('pepe');
			dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="text-center mt-5">
			{
				store.agenda?.map(el => <ContactCard
					key={el.id}
					cid={el.id}
					name={el.name}
					phone={el.phone}
					email={el.email}
					address={el.address}
				/>)
			}

		</div>
	);
}; 