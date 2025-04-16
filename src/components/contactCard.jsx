import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import contactServices from "../services/contactServices"

export const ContactCard = props => {

    const {store, dispatch} = useGlobalReducer()
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const resp = await contactServices.deleteContact('pepe', props.cid)
            dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })

        } catch (error) {
            
        }
    }

    const handleEdit = () => {
        navigate('/edit/'+props.cid)
    }


    return (
        <div className="card">
            <div className="d-flex">
                <div className="w-25">
                    <img className="img-fluid" 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F439%2F863%2Foriginal%2Fvector-users-icon.jpg&f=1&nofb=1&ipt=cde9ce62afe41525a15fcfd1685ef2258293eca7b8d62411631138354a699929" 
                    alt={props.name} 
                    />
                </div>
                <div className="w-75 text-start align-content-center">
                    <h3>{props.name}</h3>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                    <p>{props.address}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>Eliminar!</button>
                    <button className="btn btn-primary" onClick={handleEdit}>Editar!</button>

                </div>
            </div>
        </div>
    )
}