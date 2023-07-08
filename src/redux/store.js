import { configureStore } from "@reduxjs/toolkit";
import BioSlice from "./Slices/BioSlice";
import SkillsSlice from "./Slices/SkillsSlice";


const store = configureStore({
    reducer:{
        bio: BioSlice,
        skills:SkillsSlice
    }
})

export default store;