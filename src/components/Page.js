import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Menu as MenuIcon } from '@material-ui/icons';

const propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        fontFamily: "\"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"sans-serif\""
    },
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    canvasHide: {
        display: 'hide'
    },
    rightHeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '25px'
    }
});

class Page extends Component {

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    onMenuItemClick = route => {
        switch (route) {
            case "currentWeather":
                this.props.history.push('/current-weather');
                break;
            case "forecast":
                this.props.history.push('/forecast');
                break;
            case "UVIndex":
                this.props.history.push('/uv-index');
                break;
            default: this.props.history.push('/');
        }
    }



    render() {

        const { classes, theme } = this.props;

        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Weather App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key={"Current Weather"} onClick={() => this.onMenuItemClick('currentWeather')}>
                            <ListItemIcon><i className="material-icons">today</i></ListItemIcon>
                            <ListItemText primary={"Current Weather"} />
                        </ListItem>
                        <ListItem button key={"Forecast"} onClick={() => this.onMenuItemClick('forecast')}>
                            <ListItemIcon><i className="material-icons">forward_5</i></ListItemIcon>
                            <ListItemText primary={"Forecast"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={"UVIndex"} onClick={() => this.onMenuItemClick('UVIndex')}>
                            <ListItemIcon><i className="material-icons">wb_sunny</i></ListItemIcon>
                            <ListItemText primary={"UV Index"} />
                        </ListItem>
                    </List>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />{this.props.children}
                </main>
            </div>
        );
    }
}

Page.propTypes = propTypes;


export default withRouter(withStyles(styles, { withTheme: true })(Page));