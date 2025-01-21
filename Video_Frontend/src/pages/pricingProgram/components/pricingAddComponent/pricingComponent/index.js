import FormField from 'pages/pricingProgram/components/formField/index'
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function PricingComponent({ formData }) {

    const { formField, values, errors, touched } = formData;

    const {
        level,
        title,
        price,
        record_time,
        record_limit,
        snapshot_limit
    } = formField;

    const {
        level: level_V,
        title: title_V,
        price: price_V,
        record_time: record_time_V,
        record_limit: record_limit_V,
        snapshot_limit: snapshot_limit_V
    } = values;

    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <FormField
                    label={level.label}
                    name={level.name}
                    type={level.type}
                    value={level_V}
                    placeholder={level.placeholder}
                    error={errors.level && touched.level}
                    success={level_V.length > 0 && !errors.level}
                />
                <FormField
                    label={title.label}
                    name={title.name}
                    type={title.type}
                    value={title_V}
                    placeholder={title.placeholder}
                    error={errors.title && touched.title}
                    success={title_V.length > 0 && !errors.title}
                />
                <FormField
                    label={price.label}
                    name={price.name}
                    type={price.type}
                    value={price_V}
                    placeholder={price.placeholder}
                    error={errors.price && touched.price}
                    success={price_V.length > 0 && !errors.price}
                />
                <FormField
                    label={record_time.label}
                    name={record_time.name}
                    type={record_time.type}
                    value={record_time_V}
                    placeholder={record_time.placeholder}
                    error={errors.record_time && touched.record_time}
                    success={record_time_V.length > 0 && !errors.record_time}
                />
                <FormField
                    label={record_limit.label}
                    name={record_limit.name}
                    type={record_limit.type}
                    value={record_limit_V}
                    placeholder={record_limit.placeholder}
                    error={errors.record_limit && touched.record_limit}
                    success={record_limit_V.length > 0 && !errors.record_limit}
                />
                <FormField
                    label={snapshot_limit.label}
                    name={snapshot_limit.name}
                    type={snapshot_limit.type}
                    value={snapshot_limit_V}
                    placeholder={snapshot_limit.placeholder}
                    error={errors.snapshot_limit && touched.snapshot_limit}
                    success={snapshot_limit_V.length > 0 && !errors.snapshot_limit}
                />
            </Grid>
        </Grid>
    );
}

// typechecking props for Address
PricingComponent.propTypes = {
    formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default PricingComponent;
