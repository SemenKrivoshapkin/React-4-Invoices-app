import { createContext, useEffect, useState } from "react";
import { getAllInvoices } from "../config/invoices";

export const AppContext = createContext(null)

export const ContextWrapper = ({ children }) => {
    const [invoices, setInvoices] = useState([])
    const [openDrawer, setOpenDrawer] = useState(false)

    useEffect(() => {
        getAllInvoices().then((res) => {
            setInvoices(res)
        })
    }, [])

    return <AppContext.Provider value={{
        invoices, setInvoices, openDrawer, setOpenDrawer
    }}>
        {children}
    </AppContext.Provider>
}