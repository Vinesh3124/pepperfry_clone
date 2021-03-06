import React from "react";
import { useSelector } from "react-redux";
import { SecondaryGreyContainer } from "./HomeStyle";
import houseFavouriteList from "../../StaticData/Home/houseFavouriteList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const HouseFavourite = () => {
    const { dataListLoadingTwo, dataListTwo } = useSelector(
        (state) => state.dataList,
    );

    return (
        <SecondaryGreyContainer>
            <p>{!dataListLoadingTwo && "HOUSE FAVOURITES"}</p>
            <p>{!dataListLoadingTwo && "Loved By All"}</p>
            <div>
                {dataListLoadingTwo
                    ? houseFavouriteList.map((data, i) => (
                          <CustomCard key={i} type="secondary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListTwo.map((item, index) => (
                          <CustomCard key={index} type="secondary">
                              <img src={item.image_url} alt="ProductImage" />
                              <label>{item.heading}</label>
                              <label>{item.description}</label>
                          </CustomCard>
                      ))}
            </div>
        </SecondaryGreyContainer>
    );
};
