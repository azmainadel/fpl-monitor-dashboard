"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import MapOne from "../Maps/MapOne";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats category="Most Points" team="Shera Team" manager="Sadik Ahammed" change="129" positiveStat/>
        <CardDataStats category="Lowest Points" team="xD Team" manager="Rupak Ahsan" change="-14" negativeStat/>
        <CardDataStats category="Most Rank Gain" team="Shit Team" manager="Azmain Adel" change="420" levelUp/>
        <CardDataStats category="Most Rank Loss" team="Baaje Team" manager="Saad Al Muttakee"  change="69" levelDown/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
