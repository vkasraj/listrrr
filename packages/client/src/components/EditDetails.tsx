import React, { Fragment, useState, FC } from "react";
import { IconButton, Typography, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/EditTwoTone";
import BaseEditDrawer from "./Base/BaseEditDrawer";
import BaseEditForm from "./Base/BaseEditForm";
import { TitleAndDescriptionInput, EntityType } from "../generated/graphql";
import { SubmitHandler } from "../@types/types";
import { useIEditDetailsMutation } from "../gql/shared.query";

type Props = {
    _id: string;
    defaultValue: TitleAndDescriptionInput;
    formTitle: string;
    type: EntityType;
};

const EditDetails: FC<Props> = ({
    _id,
    defaultValue,
    formTitle: title,
    type,
}) => {
    const [open, setOpen] = useState(false);
    const [handleEdit] = useIEditDetailsMutation({
        onCompleted() {
            setOpen(false);
        },
    });

    const handleDrawer = (val: boolean) => () => setOpen(val);

    const handleSubmit: SubmitHandler<TitleAndDescriptionInput> = async values => {
        await handleEdit({
            variables: {
                where: { _id, type },
                data: values,
            },
        });
    };

    return (
        <Fragment>
            <Tooltip title={title}>
                <IconButton onClick={handleDrawer(true)}>
                    <EditIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <BaseEditDrawer open={open} onClose={handleDrawer(false)}>
                <Typography variant="h6" paragraph>
                    {title}
                </Typography>
                <BaseEditForm
                    onSubmit={handleSubmit}
                    inititalValues={defaultValue}
                />
            </BaseEditDrawer>
        </Fragment>
    );
};

export default EditDetails;
