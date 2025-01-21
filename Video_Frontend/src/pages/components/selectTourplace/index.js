import VuiBox from "components/VuiBox";
import VuiSelect from "components/VuiSelect";
function SelectTourplace({ tourplacedata, setTourPlace }) {
    const handleSetState = (e) => {
        setTourPlace(e.value);
    }
    return (
        <VuiBox sx={{ marginBottom: '10px' }}>
            <VuiSelect
                defaultValue={tourplacedata[0]}
                options={tourplacedata}
                onChange={(e) => handleSetState(e)}
                size="large"
            />
        </VuiBox>
    )
}
export default SelectTourplace;