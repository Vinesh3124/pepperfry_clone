import React from "react";
import { useSelector } from "react-redux";
import { PrimaryGreyContainer } from "./HomeStyle";
import homeChikHomeList from "../../StaticData/Home/homeChikHomeList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const HomeChikHome = () => {
    const { dataListLoadingOne, dataListOne } = useSelector(
        (state) => state.dataList,
    );

    return (
        <PrimaryGreyContainer>
            <p> {!dataListLoadingOne && "HOME CHIC HOME"}</p>
            <p>{!dataListLoadingOne && "Give Your Place A Makeover"}</p>
            <div>
                {dataListLoadingOne
                    ? homeChikHomeList.map((data, i) => (
                          <CustomCard key={i} type="primary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListOne.map((item, index) => (
                          <CustomCard key={index} type="primary">
                              <img
                                  src={item.heading_image}
                                  alt="HeadingImage"
                              />

                              <label>
                                  <span>Traits : </span>
                                  {item.description}
                              </label>
                              <label>
                                  <span>{item.display_price} </span>
                              </label>
                              <img
                                  src={item.product_image}
                                  alt="ProductImage"
                              />
                              {item.product_feature}
                              <label>
                                  <span>Popular For : </span>
                                  <span>{item.product_type}</span>
                              </label>
                          </CustomCard>
                      ))}
            </div>
        </PrimaryGreyContainer>
    );
};
