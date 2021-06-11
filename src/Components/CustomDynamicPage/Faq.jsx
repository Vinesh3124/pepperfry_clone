import React from "react";
import { useSelector } from "react-redux";
import { AdditionalInfoDiv } from "./AdditionalInfoStyle";
import faqList from "../../StaticData/Dynamic/faqList.json";
import { Spinner } from "../Loading/Spinner";

export const Faq = () => {
    const { dataListLoading, dataListEight } = useSelector(
        (state) => state.dataList,
    );

    return (
        <AdditionalInfoDiv>
            <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
                Frequently Asked Questions
            </h2>
            {dataListLoading
                ? faqList.map((data, i) => (
                      <div key={i}>
                          <Spinner data={data} />
                      </div>
                  ))
                : dataListEight.map((item) => (
                      <div>
                          <h2>{item.q}</h2>
                          <p>{item.a}</p>
                      </div>
                  ))}
        </AdditionalInfoDiv>
    );
};
