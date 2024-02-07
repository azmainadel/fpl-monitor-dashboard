"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import CaptaincyChart from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import LeagueShortTable from "../Tables/LeagueShortTable";
import InfoCards from "../CardDataStats";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <InfoCards category="'Kora' Team" team="Turk Whiskey" manager="Kink Das" change="129 pts" positiveStat/>
        <InfoCards category="Loser Team" team="xyntherys" manager="Azmain Adel" change="-14 pts" negativeStat/>
        <InfoCards category="Best Gorom Bench" team="Vigilante XI" manager="Rupak Ahsan" change="32 pts" negativeStat/>
        <InfoCards category="Eliminated" team="xyntherys...again :(" manager="Azmain Adel" change="KO" negativeStat/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        <ChartTwo />
        <CaptaincyChart />
        <ChartTwo />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:mt-7.5 2xl:gap-7.5">
        <InfoCards category="One GW Wonder" team="Arsenal #1" manager="Sadik Ahammed Siddique" change="420" levelUp/>
        <InfoCards category="Jibon Tai Loss" team="Dabi Janai" manager="MD Shihab Sharker"  change="69" levelDown/>
        <InfoCards category="Deshi Hero" team="Xine" manager="Abdullah Tamim" change="#1" positiveStat/>
        <InfoCards category="Bhindeshi Hero" team="supernooba" manager="Sadman Sadeed Omee"  change="#6" positiveStat/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <LeagueShortTable />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
