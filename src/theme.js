import {createTheme} from '@material-ui/core'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#3f5ef2',
            light: '#6e84f4',
            dark: '#2f46be',
        }
    },

    defaultButton: {
        backgroundColor: '#3f5ef2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#6e84f4',
        }
    }
})
