import React from 'react';
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { action_type } from 'redux/action_type';

function PricingCards({ prices, valid_price_list, user_type }) {
  const dispatch = useDispatch();
  const selectPriceForBuy = (id) => {
    dispatch({type: action_type.SET_SELECT_PRICE_FOR_BUY, price_id: id});
    dispatch({type: action_type.SHOW_PAY_MODAL, status: true});
  }

  const MakeCard = ({ item, paid, user_type }) => {
    const { id, price, title, record_limit, record_time, snapshot_limit } = item;
    return (
      <Grid item xs={12} lg={3} xl={2.5}>
        {user_type === 3 && price > 0?
          <DefaultPricingCard
            badge={{ color: paid ? "primary" : "dark", label: title }}
            price={{ currency: "$", value: price }}
            specifications={[
              { label: "Camera View", includes: true },
              { label: `${record_limit} Recording Limits`, includes: true },
              { label: `${record_time}s Recording Time Limits`, includes: true },
              { label: `${snapshot_limit} Snapshot Limits`, includes: true },
            ]}
            action={{
              type:  paid ? "paid" : "nonpaid",
              color: paid ? "success" : "info",
              label: paid ? "current version" : "Buy",
              handleOnClick: () => selectPriceForBuy(id),
            }}
          /> : <DefaultPricingCard
            badge={{ color: "dark", label: title }}
            price={{ currency: "$", value: price }}
            specifications={[
              { label: "Camera View", includes: true },
              { label: `${record_limit} Recording Limits`, includes: true },
              { label: `${record_time}s Recording Time Limits`, includes: true },
              { label: `${snapshot_limit} Snapshot Limits`, includes: true },
            ]}
          />
        }
      </Grid>
    )
  }

  return (
    <VuiBox px={{ xs: 1, sm: 0 }}>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        {
          prices.map((item, key) => {
            return valid_price_list.some(valid_item => valid_item.price_id === item.id)
              ? <MakeCard item={item} paid={true} key={key} user_type={user_type} />
              : <MakeCard item={item} paid={false} key={key} user_type={user_type} />
          })
        }
      </Grid>
    </VuiBox>
  );
}

// Typechecking props for the PricingCards
PricingCards.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PricingCards;
