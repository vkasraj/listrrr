import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const FormSelect = ({
    options: { entities, result },
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    const selectItems = result.map(_id => (
        <MenuItem key={_id} value={_id} dense>
            <Typography variant="body2">{entities[_id].title}</Typography>
        </MenuItem>
    ));

    return (
        <FormControl margin="dense" fullWidth>
            <InputLabel shrink htmlFor={`htmlfor-${props.label}`}>
                {props.label}
            </InputLabel>
            <Select
                displayEmpty
                id={`htmlfor-${props.label}`}
                {...field}
                {...props}
            >
                <MenuItem value="">
                    <Typography variant="body2">None</Typography>
                </MenuItem>
                {selectItems}
            </Select>
            {/* <FormHelperText>Label + placeholder</FormHelperText> */}
        </FormControl>
    );
};

export default FormSelect;
