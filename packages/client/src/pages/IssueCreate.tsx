import React, { Fragment } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { SubmitHandler } from "../@types/types";
import FormikForm from "../components/Form/FormikForm";
import FormikTextField from "../components/Form/FormikTextField";
import FormikTextArea from "../components/Form/FormikTextArea";
import FormikSubmitButton from "../components/Form/FormikSubmitButton";
import BackButton from "../components/BackButton";
import FormikSelect from "../components/Form/FormikSelect";
import { useIProjectsQuery } from "../gql/project.query";
import BaseLoader from "../components/Base/BaseLoader";
import { useICreateIssueMutation } from "../gql/issue.query";
import { Sort, Status } from "../generated/graphql";

const initValues = {
    title: "",
    description: "",
    projectIDs: [],
};

const IssueCreate = () => {
    const [handleCreateIssue, { data: isd }] = useICreateIssueMutation();
    const { data: pd, loading } = useIProjectsQuery({
        filters: {
            sort: Sort.CREATED_DESC,
            status: Status.OPEN,
        },
    });

    const handleSubmit: SubmitHandler<typeof initValues> = async values => {
        await handleCreateIssue({
            variables: { data: values },
        });
    };

    const renderProjects = () => {
        if (!pd) {
            return <Typography>Unable to get projects</Typography>;
        }

        return (
            <FormikSelect
                name="projectIDs"
                label="Add to Projects"
                multiple
                options={pd.projects}
            />
        );
    };

    if (loading) {
        return <BaseLoader />;
    }

    if (isd) {
        const { _id } = isd.createIssue;

        return <Redirect to={`/d/issue/${_id}`} />;
    }

    return (
        <Fragment>
            <BackButton />
            <Typography variant="h5" paragraph>
                New Issue
            </Typography>
            <FormikForm onSubmit={handleSubmit} initialValues={initValues}>
                <Grid container spacing={4}>
                    <Grid item xs={9}>
                        <FormikTextField name="title" label="Title" />
                        <FormikTextArea
                            name="description"
                            label="Description"
                        />
                        <Box display="flex" justifyContent="flex-end">
                            <FormikSubmitButton fullWidth={false}>
                                Create Issue
                            </FormikSubmitButton>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        {renderProjects()}
                    </Grid>
                </Grid>
            </FormikForm>
        </Fragment>
    );
};

export default IssueCreate;
