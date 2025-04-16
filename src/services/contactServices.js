const contactServices = {}

contactServices.getAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas');
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

contactServices.getOneAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

contactServices.createContact = async (slug, formData) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}

contactServices.deleteContact = async (slug, id) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + id, {
            method: 'DELETE'
        });
        if (!resp.ok) throw new Error('error deleting')
        //si se elimino correctamente, devuelveme la nueva version de mi agenda
        return contactServices.getOneAgenda(slug) //hacemos pedido de la agenda
    } catch (error) {
        console.log(error);
    }
}


contactServices.updateContact = async (slug, id, formData) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!resp.ok) throw new Error('error deleting')
        //si se actualizo correctamente, devuelveme la nueva version de mi agenda
        return contactServices.getOneAgenda(slug) //hacemos pedido de la agenda
    } catch (error) {
        console.log(error);
    }
}


export default contactServices