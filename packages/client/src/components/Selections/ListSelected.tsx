import React, { FC, Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Maybe } from "../../generated/graphql";

type II = {
    _id: string;
    title: string;
};

type Props = {
    list: Maybe<II>[];
    emptyText: string;
};

const ListSelected: FC<Props> = ({ list, emptyText }) => {
    if (!list.length) {
        return <Typography variant="caption">{emptyText}</Typography>;
    }

    const ll = list.map(li => (
        <Typography key={li?._id} variant="caption" component="p" gutterBottom>
            - {li?.title}
        </Typography>
    ));

    return <Fragment>{ll}</Fragment>;
};

export default ListSelected;
