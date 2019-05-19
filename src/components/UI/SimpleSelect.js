import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit * 2,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    inputLabel: {
        textTransform: 'capitalize'
    }
});

const SimpleSelect = (props) => {

    const { classes, menuItems } = props;

    // Get select input menu items from incoming array 
    let selectItems = [];
    if (menuItems) {
        selectItems = menuItems.map((el, index) => (
            <MenuItem value={index} key={index}>
                {el}
            </MenuItem>
        ));
    }

    return (
        <form className={classes.root} autoComplete="off" >
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={props.type} className={classes.inputLabel}>{props.type}</InputLabel>
                <Select
                    value={props.value}
                    onChange={props.handleSelectChange}
                    inputProps={{
                        name: props.type,
                        id: `${props.type}-simple`,
                    }}
                >

                    {selectItems}

                </Select>
            </FormControl>
        </form>
    );
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);