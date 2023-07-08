import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    skill:[],
    hobby:[],
    subject:[]
}

const SkillsSlice = createSlice({
    name:'skills',
    initialState,
    reducers: {
        setSkills: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            const prevSkills = [...prevState.skill];

            prevSkills.push(payload)
            prevState.skill = prevSkills;
            return prevState;
        },
        setHobbies: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            const prevHobbies = [...prevState.hobby];

           prevHobbies.push(payload);
           prevState.hobby = prevHobbies
            return prevState;
        },
        setSubjects: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            const prevSubjects = [...prevState.subject];

            prevSubjects.push(payload)
            prevState.subject = prevSubjects
            return prevState;
            // return prevState;
        },
        removeSkills: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            const prevSkills = [...prevState.skill];

            prevState.skill = prevSkills.filter(el => el != payload);
            return prevState;
        },
        removeHobbies: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            const prevSkills = [...(prevState.hobby)];

            prevState.skill = prevSkills.filter(el => el != payload);
            return prevState;
        },
        removeSubjects: (state, action) => {
            const {payload} = action;
            const prevState = {...state};
            const prevSkills = [...prevState.subject];

            prevState.subject = prevSkills.filter(el => el != payload);
            return prevState;
        }
    }
})

export const {setHobbies, setSkills, setSubjects, removeHobbies, removeSkills, removeSubjects} = SkillsSlice.actions;
export default SkillsSlice.reducer