import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    editDrawer: {
        width: spacing(30),
        [breakpoints.up("sm")]: {
            width: spacing(45)
        },
        [breakpoints.up("md")]: {
            width: spacing(60)
        }
    }
}));

const BaseEditDrawer = ({ children, open, onClose }) => {
    const classes = useStyles();
    return (
        <Drawer
            classes={{
                paper: classes.editDrawer
            }}
            open={open}
            onClose={onClose}
            variant="temporary"
            anchor="right"
        >
            <Box p={2}>{children}</Box>
        </Drawer>
    );
};

export default BaseEditDrawer;