import Home from "../../app/login/index.login";
import Signup from "../../app/signup/index.signup";
import Dashboard from "../../app/dashboard/index.dashboard";
import Issue from "../../app/issue/index.issue";
import IssueAdd from "../../app/issue/issue-add/index.issue.add";
import IssueList from "../../app/issue/issue-list/index.issue.list";

import Show from "../../app/show/index.show";
import Hello from "../../app/hello/index.hello";

export const redirects = {
    default: "/",
    authFailure: "/signup",
    authSuccess: "/d"
};

export const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
        private: false
    },
    {
        path: "/signup",
        component: Signup,
        private: false
    },
    {
        path: "/d",
        component: Dashboard,
        private: true,
        routes: [
            {
                path: "/d/issues",
                component: Issue,
                private: true,
                routes: [
                    {
                        path: "/d/issues/list",
                        component: IssueList,
                        private: true
                    },
                    {
                        path: "/d/issues/add",
                        component: IssueAdd,
                        private: true
                    }
                ]
            },
            {
                path: "/d/show",
                component: Show,
                private: true
            },
            {
                path: "/d/hello",
                component: Hello,
                private: true
            }
        ]
    }
];
