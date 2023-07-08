import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    aboutMe:"",
    bloodGroup:"",
    resume:{
        url:"",
        fileName:"",
        file:null
    }
}

const BioSlice = createSlice({
    name:'bio',
    initialState,
    reducers: {
        setAboutMe: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            prevState.aboutMe = payload;
            return prevState;
        },
        setBloodGroup: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            prevState.bloodGroup = payload;
            return prevState;
        },
        setResume: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            prevState.resume.file = payload.file;
            prevState.resume.fileName = payload.fileName
            // return prevState;
        }
    }
})

export const {setAboutMe, setBloodGroup, setResume} = BioSlice.actions;
export default BioSlice.reducer