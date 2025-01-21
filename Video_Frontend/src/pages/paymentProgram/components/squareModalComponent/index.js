import React, { useRef } from 'react';
import { Modal } from 'react-responsive-modal';
import { Card, CardContent } from "@mui/material";
import VuiButton from 'components/VuiButton';
import { useDispatch, useSelector } from 'react-redux';
import { action_type } from 'redux/action_type';
import { pay } from 'redux/actions/payment';

function SquareModalComponent() {
    const payModalStatus = useSelector((state) => state.pricingReducer.paymodalStatus);
    const applicationId = process.env.REACT_APP_SQUARE_APPLICATION_ID;
    const locationId = process.env.REACT_APP_SQUARE_LOCATION_ID;
    const cardElement = useRef(null);
    const selectedPriceForBuy = useSelector((state) => state.pricingReducer.selectedPriceForBuy);
    const userdata = useSelector((state) => state.auth.userData);
    const access_token = userdata.access;
    const dispatch = useDispatch()

    const closePayModal = () => {
        dispatch({type: action_type.SET_SELECT_PRICE_FOR_BUY, price_id: -1});
        dispatch({type: action_type.SHOW_PAY_MODAL, status: false});
    }

    const handlePayment = async (event) => {
        event.preventDefault();
        if (cardElement.current) {
            const result = await cardElement.current.tokenize();
            if (result.status === 'OK') {
                const param = {
                    token: result.token,
                    price_id: selectedPriceForBuy,
                }
                await dispatch(pay(access_token, param));
            } else {
                console.error('Failed to tokenize card:', result.errors);
            }
        }
    };

    const initializeSquarePayments = () => {
        if(payModalStatus){
            if (!window.Square) {
                console.error('Square payments SDK is not loaded.');
                return;
            }
            const payments = window.Square.payments(applicationId, locationId);
            payments.card().then(card => {
                cardElement.current = card;
                card.attach('#card-container');
            }).catch(error => {
                console.error('Failed to load Square card:', error);
            });
        }
    };

    React.useEffect(() => {
        initializeSquarePayments();
    }, [payModalStatus]);
    return (
        <Modal open={payModalStatus} center styles={{ modal: { background: '#171a42', minWidth: '30%', marginTop: 100, maxWidth: '50%' }, closeButton: { display: 'none' } }} onClose={closePayModal}>
            <Card>
                <CardContent sx={{ padding: 0 }}>
                    <form onSubmit={handlePayment}>
                        <div id="card-container" style={{ minWidth: 'auto' }}></div>
                        <VuiButton variant="outlined" sx={{ width: '100%' }} color="info" size="small" type="submit">
                            Pay
                        </VuiButton>
                    </form>
                </CardContent>
            </Card>
        </Modal>
    );
}

export default SquareModalComponent;
