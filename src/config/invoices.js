import { instance } from "../axios/instance.js"

export const getAllInvoices = async () => {
    return (await instance.get('/invoices', {
        headers: {
            Authorization: localStorage.getItem('accessToken')
        }
    })).data
}

export const getInvoiceById = async (id) => {
    return (await instance.get(`/invoices/${id}`)).data
}

export const createInvoice = async (invoice) => {
    return (await instance.post('/invoices', invoice)).data
}

export const deleteInvoice = async (id) => {
    return await instance.delete(`/invoices/${id}`).data
}

export const updateInvoiceStatus = async (id, status) => {
    return (await instance.patch(`/invoices/${id}/status`, { status })).data
}