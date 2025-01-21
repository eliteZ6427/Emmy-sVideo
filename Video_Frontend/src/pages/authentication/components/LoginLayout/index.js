import Footer from "pages/authentication/components/Footer";
import PageLayout from "examples/LayoutContainers/PageLayout";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

function LoginLayout({ title, description, image, children }) {
  return (
    <PageLayout>
      <VuiBox
        mt={{ xs: 10, lg: 10, xl: 10, xxl: 10 }}
        px={{ xs: 0, lg: 1 }}
        width={{ xs: "100%", lg: "calc(100% - 2rem)" }}
        mx="auto"
      >
        <VuiBox
          display="flex"
          justifyContent="center"
          mx={{ xs: "auto", lg: "auto" }}
          maxWidth={{ xs: "90%", md: "436px" }}
        >
          {children}
        </VuiBox>
      </VuiBox>
      <Footer full />
    </PageLayout>
  );
}

LoginLayout.defaultProps = {
  title: "",
  description: "",
};

LoginLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
