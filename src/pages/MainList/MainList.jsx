// import { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import './MainList.css'
import MainBody from "./components/MainBody";
// import {useDispatch, useSelector} from 'react-redux'
// import { addClub } from "../../store/clubs/slice";


const MainList = () => {

    // const dispatch = useDispatch()
    // const {clubs} = useSelector(state => state.clubs)
    // console.log(clubs)
   
    // useEffect(() => {
    //     dispatch(addClub({name: 'Galatasaray'}))
    // }, [])


    return (
        <>
        <Sidebar />
        <MainBody />
        </>  
    )
}

export default MainList;