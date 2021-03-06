import React, { FC, memo } from "react";
import { Box, makeStyles, FormControlLabel, Radio } from "@material-ui/core";
import { BoxProps } from "@material-ui/core/Box";
import { ThemeBgColorType } from "../../@types/types";
import { useAppBgColor } from "./ThemeContext";

const useStyles = makeStyles(({ palette: { getContrastText } }) => ({
    btn: ({ color }: ThemeBgColorType) => ({
        background: color,
        color: getContrastText(color),
    }),
    radio: ({ color }: ThemeBgColorType) => ({
        color: getContrastText(color),
    }),
    label: {
        paddingRight: "0.4rem",
    },
}));

type Props = BoxProps & {
    themeColor: ThemeBgColorType;
};

const ThemeBgColorButton: FC<Props> = ({ themeColor, ...props }) => {
    const { bg, changeBg } = useAppBgColor();
    const styles = useStyles(themeColor);

    const handleClick = () => changeBg(themeColor);

    return (
        <Box
            py={1}
            borderRadius="borderRadius"
            className={styles.btn}
            textAlign="center"
            {...props}
        >
            <FormControlLabel
                checked={themeColor.key === bg.key}
                onClick={handleClick}
                control={
                    <Radio
                        color="default"
                        classes={{
                            root: styles.radio,
                            checked: styles.radio,
                        }}
                    />
                }
                value={themeColor.color}
                label={themeColor.title}
            />
        </Box>
    );
};

export default memo(ThemeBgColorButton);
