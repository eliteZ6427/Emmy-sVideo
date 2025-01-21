
import PageLayout from "examples/LayoutContainers/PageLayout";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

function BasicLayout({ title, description, image, children }) {
  return (
    <PageLayout>
      <VuiBox
        mt={{ xs: 10, lg: 10, xl: 10, xxl: 10 }}
        px={{ xs: 0, lg: 1 }}
        width={{ xs: "100%", lg: "calc(100% - 2rem)" }}
        mx="auto"
      >
        {children}
      </VuiBox>
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
