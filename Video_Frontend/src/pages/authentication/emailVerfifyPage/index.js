import { useLocation, useNavigate } from "react-router-dom";

import GradientBorder from "examples/GradientBorder";
import LoginLayout from "pages/authentication/components/LoginLayout";
import VuiBox from "components/VuiBox";
// import bgBasic from "assets/images/background-basic-auth.png";
import borders from "assets/theme/base/borders";
import logolg from "assets/images/logo-lg.png";
import VuiTypography from "components/VuiTypography";
import { Grid } from "@mui/material";
import { sendEmailVerification } from "redux/actions/register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function EmailVerificationPage() {

    const query = useQuery();
    const uid = query.get('uid');
    const token = query.get('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const param = {
            user_id: uid,
            token: token
        }
        dispatch(sendEmailVerification(param, navigate));
    }, [])

    return (
        <LoginLayout>
            <GradientBorder borderRadius={borders.borderRadius.form} minWidth="100%" maxWidth="100%">
                <VuiBox
                    borderRadius="inherit"
                    p="45px"
                    sx={({ palette: { secondary } }) => ({
                        backgroundColor: secondary.main,
                    })}
                >
                    <VuiBox
                        component='img'
                        src={logolg}
                        sx={({ breakpoints }) => ({
                            alignSelf: 'center',
                            paddingTop: '20px',
                            [breakpoints.down("xs")]: {
                                width: "200px",
                            },
                            [breakpoints.between("xs", "md")]: {
                                width: "250px",
                            },
                            [breakpoints.up("lg")]: {
                                width: "350px",
                            },
                        })}
                    />
                    <Grid
                        container
                        justifyContent="center"
                        sx={{ textAlign: "center" }}
                    >
                        <Grid item xs={10} lg={12}>
                            <VuiBox mt={6} mb={1}>
                                <VuiTypography variant="h4" color="white" fontWeight="bold" mb="20px">
                                    Verifing email...
                                </VuiTypography>
                            </VuiBox>
                            <VuiBox>
                                <VuiTypography variant="h6" color="white" fontWeight="regular">
                                    You will be redirected once your email would be verified.
                                </VuiTypography>
                            </VuiBox>
                        </Grid>
                    </Grid>
                </VuiBox>
            </GradientBorder>
        </LoginLayout>
    );
}

export default EmailVerificationPage;
