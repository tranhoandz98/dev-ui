import create from 'zustand'
import { devtools } from 'zustand/middleware'

const emptyUser = null;
const emptyProject = null;
const initalState = {
    userData: emptyUser,
    projectData: emptyProject,
};

// eslint-disable-next-line no-unused-vars
const useStore = create(devtools(set => ({
    ...initalState,
    setAuthData: data => set(
        state => ({ ...state, userData: data })
    ),
    unsetAuthData: () => set(
        state => ({ ...state, userData: emptyUser })
    ),
    setProjectData: data => set(
        state => ({ ...state, projectData: data })
    ),
    unsetProjectData: () => set(
        state => ({ ...state, projectData: emptyProject })
    ),
})))

export default useStore;
