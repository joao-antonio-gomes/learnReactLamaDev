import React, {useState} from 'react'
import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
import {Clear, Mail, Notifications, Search} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    logoWeb: {
        display: 'block',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    logoMobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '40vw',
        // transition: 'all .2s linear',
        [theme.breakpoints.down('xs')]: {
            transform: (props) => props.open ? 'translateX(90%)' : 'translateX(250%)',
            transition: 'all .2s linear',
        },
    },
    input: {
        padding: theme.spacing(0.25),
        color: '#fff',
        marginLeft: theme.spacing(1),
    },
    inputIcon: {
        marginLeft: theme.spacing(1),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    icons: {
        color: '#fff',
        alignItems: 'center',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            transform: (props) => props.open ? 'translateX(250%)' : 'translateX(0%)',
            transition: 'all .2s linear',
        },

    },
    badge: {
        marginRight: theme.spacing(2),
    },
    searchButtonMobile: {
        marginRight: theme.spacing(2),
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    clearButtonMobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: (props) => props.open ? 'block' : 'none',
            marginRight: theme.spacing(1),
        },
    },
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const classes = useStyles({open})

    return (
        <AppBar position={'fixed'}>
            <Toolbar className={classes.toolbar}>
                {/*<IconButton
                    edge='start'
                    // className={classes.menuButton}
                    color='inherit'
                    aria-label='open drawer'>
                    <NavIcon />
                </IconButton>*/}
                <Typography variant={'h6'}
                            className={classes.logoWeb}>
                    Jota Dev
                </Typography>
                <Typography variant={'h6'}
                            className={classes.logoMobile}>
                    JOTA
                </Typography>

                <div className={classes.searchBar}>
                    <Search className={classes.inputIcon} />
                    <InputBase placeholder={'Search...'}
                               className={classes.input} />
                    <Clear className={classes.clearButtonMobile}
                           onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButtonMobile}
                            onClick={() => setOpen(true)} />
                    <Badge badgeContent={4}
                           color='secondary'
                           className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4}
                           color='secondary'
                           className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt='Remy Sharp'
                            src='https://image.flaticon.com/icons/png/512/147/147144.png' />

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
