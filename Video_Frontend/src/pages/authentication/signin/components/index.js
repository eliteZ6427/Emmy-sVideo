import FormField from "pages/authentication/signup/components/FormField";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import SelectFormField from "./SelectFormField";

import { useSelector } from 'react-redux';
function LoginInfo({ formData }) {
    const { formField, values, errors, touched } = formData;
    const { tourplace, email, password } = formField;
    const { email: emailV, password: passwordV, tourplace: tourplaceV} = values;

    const selectTourPlace = useSelector((state) => state.tourplaceReducer.tourplaceData);
    const tourplacedata = selectTourPlace.map((item) => ({value: item.id, label: item.place_name}))

    return (
        <>
            <VuiBox mb={2}>
                <SelectFormField
                    label={tourplace.label}
                    name={tourplace.name}
                    type={tourplace.type}
                    value={tourplaceV}
                    selectArray={tourplacedata}
                    placeholder={tourplace.placeholder}
                    initialValue={0}
                />
            </VuiBox>
            <VuiBox mb={2}>
                <FormField
                    label={email.label}
                    name={email.name}
                    type={email.type}
                    value={emailV}
                    placeholder={email.placeholder}
                    error={errors.email && touched.email}
                    success={emailV.length > 0 && !errors.email}
                    inputProps={{ autoComplete: "" }}
                />
            </VuiBox>
            <VuiBox mb={2}>
                <FormField
                    label={password.label}
                    name={password.name}
                    type={password.type}
                    value={passwordV}
                    placeholder={password.placeholder}
                    error={errors.password && touched.password}
                    success={passwordV.length > 0 && !errors.password}
                    inputProps={{ autoComplete: "" }}
                />
            </VuiBox>
        </>
    );
}

// typechecking props for Address
LoginInfo.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default LoginInfo;
