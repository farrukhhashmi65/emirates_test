import React from "react";
import {
    Box,
    Typography,
} from "@material-ui/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...rest } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...rest}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}