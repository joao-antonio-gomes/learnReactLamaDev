import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'
import {Home} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))

const Leftbar = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home />
                <Typography>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home />
                <Typography>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home />
                <Typography>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home />
                <Typography>Homepage</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
