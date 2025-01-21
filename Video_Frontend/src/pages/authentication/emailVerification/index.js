
import GradientBorder from "examples/GradientBorder";
import LoginLayout from "pages/authentication/components/LoginLayout";
import VuiBox from "components/VuiBox";
// import bgBasic from "assets/images/background-basic-auth.png";
import borders from "assets/theme/base/borders";
import logolg from "assets/images/logo-lg.png";
import VuiTypography from "components/VuiTypography";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { resendVerifyEmail } from "redux/actions/register";
import { Link } from 'react-router-dom';
import VuiButton from "components/VuiButton";
function RegisterSuccess() {
    const resend_email = useSelector((state) => state.registerReducer.resend_email);

    const dispatch = useDispatch();

    const ImportantLink = styled.a`text-decoration: underline !important;`;

    const handleResendEmailOnclick = () => {
        dispatch(resendVerifyEmail(resend_email));
    }

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
                                    Thanks for Singing Up!
                                </VuiTypography>
                            </VuiBox>
                            <VuiBox>
                                <VuiTypography variant="h6" color="white" fontWeight="regular">
                                    We sent you verification email. If you didn't get the email, please click <ImportantLink onClick={handleResendEmailOnclick}>here</ImportantLink>.
                                </VuiTypography>
                            </VuiBox>
                            <VuiButton color='info' sx={{width:'-webkit-fill-available', marginTop: '20px'}}>
                                <VuiTypography
                                    component={Link}
                                    to='/login'
                                    variant='button'
                                    color='white'
                                    fontWeight='medium'
                                >
                                    Sign in
                                </VuiTypography>
                            </VuiButton>
                        </Grid>
                    </Grid>
                </VuiBox>
            </GradientBorder>
        </LoginLayout>
    );
}

export default RegisterSuccess;
