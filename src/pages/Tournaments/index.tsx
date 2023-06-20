import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import CasinoSlots from "components/CasinoSlots";
import Header from "components/Header";

const divv3SelectseleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divv3SelectseleOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TournamentsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-3 items-center justify-start w-full">
            <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col gap-6 items-start justify-start max-w-[1600px] mx-auto md:px-5 py-6 w-full">
              <div className="flex md:flex-col flex-row gap-2 items-start justify-start pr-2 w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <SelectBox
                      className="bg-black-900 border border-blue_gray-900_01 border-solid pb-[9px] pt-[13px] px-[11px] rounded text-gray-800_02 text-left text-sm w-full"
                      placeholderClassName="text-gray-800_02"
                      indicator={
                        <Img
                          className="h-3 w-3"
                          src="images/img_arrowdown_gray_500_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="divv3selectsele"
                      options={divv3SelectseleOptionsList}
                      isSearchable={false}
                      placeholder="Entry Type"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <SelectBox
                      className="bg-black-900 border border-blue_gray-900_01 border-solid p-[11px] rounded text-gray-800_02 text-left text-sm w-full"
                      placeholderClassName="text-gray-800_02"
                      indicator={
                        <Img
                          className="h-3 w-3"
                          src="images/img_arrowdown_gray_500_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="divv3selectsele"
                      options={divv3SelectseleOptionsList1}
                      isSearchable={false}
                      placeholder="Registration"
                    />
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
                  <div className="bg-black-900 border border-blue_gray-900_01 border-solid flex flex-row items-start justify-start pl-1 sm:pr-5 pr-[25px] rounded w-auto">
                    <div className="flex flex-row gap-1.5 items-start justify-start sm:pr-5 pr-[26.45px] py-[3px] w-auto">
                      <Button
                        className="bg-gray-900_03 border border-blue_gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[53px] pl-2 pr-1 py-[7px] rounded"
                        rightIcon={
                          <Img
                            className="h-2.5 mt-0.5 mb-1 ml-[3px]"
                            src="images/img_close_blue_gray_100.svg"
                            alt="close"
                          />
                        }
                      >
                        <div className="text-blue_gray-100 text-left text-sm">
                          Live
                        </div>
                      </Button>
                      <Button
                        className="bg-gray-900_03 border border-blue_gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[91px] pl-2 pr-1 py-[7px] rounded"
                        rightIcon={
                          <Img
                            className="h-2.5 mt-px mb-[5px] ml-[3px]"
                            src="images/img_close_blue_gray_100.svg"
                            alt="close"
                          />
                        }
                      >
                        <div className="text-blue_gray-100 text-left text-sm">
                          Upcoming
                        </div>
                      </Button>
                    </div>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_gray_500_01.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-6 items-start w-auto"
                orientation="vertical"
              >
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute h-[308px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        Tournament by Mr. First - Slots FTN Race
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[79px] sm:mt-0 mt-1 py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Upcoming
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto sm:pr-5 pr-[27.08px] top-[12%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            Players will join automatically from the moment they
                            place a bet on one of the eligible games. There is
                            no registration fee and the
                            <br />
                            registration is open until the end of the
                            tournament. Players need to play the eligible games
                            with real money during the prom...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[82.01px] pr-[81.57px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +172
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 678.58
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-cyan-400 text-xs">
                      Starts In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          19
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute sm:h-[308px] h-[311px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        VIRTUAL SAGA
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[79px] mt-[7px] py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Upcoming
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pr-[10.08px] top-[13%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on Company’s
                            website can qualify for this tournament. 2. The
                            registration is free and open until the end
                            <br />
                            of the tournament. 3. It’s required to play the
                            eligible games with real money to qualify for the
                            tournament. 4. ...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +48
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 158.73
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-cyan-400 text-xs">
                      Starts In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          18
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute h-[308px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        Tournament by Mr. First - Roulette FTN Race
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] sm:mt-0 mt-1 py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto sm:pr-5 pr-[27.08px] top-[12%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            Players will join automatically from the moment they
                            place a bet on one of the eligible games. There is
                            no registration fee and the
                            <br />
                            registration is open until the end of the
                            tournament. Players need to play the eligible games
                            with real money during the prom...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +18
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 593.75
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute h-[308px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        Tournament by Mr. First - Slots FTN Race
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] sm:mt-0 mt-1 py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto sm:pr-5 pr-[27.08px] top-[12%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            Players will join automatically from the moment they
                            place a bet on one of the eligible games. There is
                            no registration fee and the
                            <br />
                            registration is open until the end of the
                            tournament. Players need to play the eligible games
                            with real money during the prom...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[82.01px] pr-[81.57px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +172
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 678.58
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute sm:h-[308px] h-[311px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        SUMMERTIME
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[79px] mt-[7px] py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Upcoming
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pr-[19.08px] top-[13%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on VBET’s
                            website can qualify for this tournament. 2. The
                            registration is free and open until the end of
                            <br />
                            the tournament. 3. To qualify for the tournament,
                            it’s required to play the eligible games with real
                            money during ...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +41
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 109.24
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-cyan-400 text-xs">
                      Starts In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          18
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute sm:h-[308px] h-[311px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        SUMMERTIME
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] mt-[7px] py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pr-[19.08px] top-[13%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on VBET’s
                            website can qualify for this tournament. 2. The
                            registration is free and open until the end of
                            <br />
                            the tournament. 3. To qualify for the tournament,
                            it’s required to play the eligible games with real
                            money during ...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +41
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 109.24
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute sm:h-[308px] h-[311px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        VIRTUAL SAGA
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] mt-[7px] py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pr-[10.08px] top-[13%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on Company’s
                            website can qualify for this tournament. 2. The
                            registration is free and open until the end
                            <br />
                            of the tournament. 3. It’s required to play the
                            eligible games with real money to qualify for the
                            tournament. 4. ...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +48
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 158.73
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          05
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute sm:h-[308px] h-[311px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        Pascal Tournament
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] mt-[7px] py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pr-[10.08px] top-[13%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on Company’s
                            website can qualify for this tournament. 2. The
                            registration is free and open until the end
                            <br />
                            of the tournament. 3. To qualify for the tournament,
                            it’s required to play the eligible games with real
                            money duri...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[92.11px] pr-[91.47px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg"
                                size="txtRobotoBold18"
                              >
                                +6
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 5462.12
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          04
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute h-[308px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        Live Major Blackjack
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] mt-1 py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pr-[4.08px] top-[12%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on the website
                            can qualify for this tournament. 2. Players
                            automatically join the tournament by placing a<br />
                            minimum bet. 3. The registration is free and open
                            until the end of the tournament. 4. To qualify for
                            the tournam...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +30
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 2184.85
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          23
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900 sm:h-[308px] h-[340px] md:h-[712px] my-0 pl-4 sm:pr-5 pr-7 py-4 relative rounded-lg shadow-bs1 w-[1600px] md:w-full">
                  <div className="absolute h-[308px] md:h-[712px] inset-y-[0] my-auto right-[8%] w-[56%] md:w-full">
                    <div className="absolute border-gray-900_03 border-r border-solid h-[308px] inset-y-[0] left-[0] my-auto w-[64%]"></div>
                    <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-[98%]">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl"
                        size="txtRobotoBold24Bluegray100"
                      >
                        Live Major Roulette
                      </Text>
                      <Button className="bg-cyan-500 cursor-pointer min-w-[46px] mt-1 py-1 rounded-[12px] text-center text-white-A700 text-xs">
                        Live
                      </Button>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[40.08px] top-[12%] w-auto">
                      <Text
                        className="leading-[18.00px] text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-blue_gray-100 font-roboto text-left font-normal">
                          <>
                            1. All Players with gaming accounts on VBET’s
                            website can qualify for this tournament. 2. Players
                            automatically join the tournament by
                            <br />
                            placing a minimum bet. 3. The registration is free
                            and open until the end of the tournament. 4. To
                            qualify for the tour...{" "}
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_gray-100 font-roboto text-left font-normal underline"
                        >
                          read more
                        </a>
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto pt-12 w-[99%]">
                      <Text
                        className="ml-2 md:ml-[0] mr-[814px] text-base text-blue_gray-100"
                        size="txtRobotoBold16"
                      >
                        Games
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17.78px] items-start justify-start pl-[8.89px] pr-[8.97px] pt-4 w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <CasinoSlots className="flex flex-col items-start justify-start rounded-[11px] w-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start rounded-[11px] w-auto">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pb-[56.61px] pt-[56.59px] rounded-[11px] w-auto">
                            <div className="flex flex-col items-start justify-start pl-[87.06px] pr-[86.52px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-lg w-auto"
                                size="txtRobotoBold18"
                              >
                                +50
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-100 text-center text-xs w-auto"
                              size="txtRobotoRegular12"
                            >
                              Show All
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-5 px-5 right-[8%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start ml-1 md:ml-[0] mt-[11px] w-auto">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_trophy.svg"
                        alt="trophy"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 w-auto">
                        <Text
                          className="text-blue_gray-100 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Prize Fund
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl w-auto"
                          size="txtRobotoBold24Bluegray100"
                        >
                          USD 5462.12
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[84.69px] items-start justify-start ml-1 md:ml-[0] mt-[35px] w-auto">
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtRobotoRegular14"
                      >
                        Entry Fee
                      </Text>
                      <Text
                        className="text-base text-orange-A700 w-auto"
                        size="txtRobotoBold16OrangeA700"
                      >
                        USD 0
                      </Text>
                    </div>
                    <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[186px] ml-1 md:ml-[0] mt-3.5 py-1 rounded text-center text-red-A200 text-xs">
                      Ends In
                    </Button>
                    <div className="flex flex-row gap-2 items-start justify-start pt-8 px-[5px] w-auto">
                      <div className="flex flex-col items-center justify-start pb-[9px] w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          00
                        </Button>
                        <Text
                          className="mt-[3px] text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Day
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          23
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Hour
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          17
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Minute
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-2.5 w-[22%]">
                        <Button className="border border-gray-800_01 border-solid cursor-pointer h-10 py-[9px] rounded text-blue_gray-100 text-center text-lg w-10">
                          07
                        </Button>
                        <Text
                          className="mt-0.5 text-[10px] text-blue_gray-100 text-center"
                          size="txtRobotoBold10"
                        >
                          Second
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer min-w-[186px] md:ml-[0] ml-[182px] py-[9px] rounded text-center text-sm text-white-A700">
                      Join Now
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient  flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1559px] mx-auto w-full">
                <Img
                  className="h-[37px] md:h-auto object-cover w-full"
                  src="images/img_364partnerspng_37x1559.png"
                  alt="364partnerspng"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end sm:pl-5 pl-[30px] py-[30px] w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-3.5 md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[59.17px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Live
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[24.17px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Prematch
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[37.17px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Esports
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="capitalize text-sm text-white-A700"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Virtual Sports
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[204px] md:mt-0 mt-3.5 md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[38.67px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Casino
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pr-[10.67px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Live Casino
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="capitalize text-orange-A700 text-sm"
                      size="txtRobotoRegular14OrangeA700"
                    >
                      Tournaments
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[237px] md:mt-0 mt-[13px] md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[78.5px] w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      About Us
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">
                        Terms and Conditions
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[49.5px] w-auto">
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtRobotoRegular14WhiteA700">
                        Privacy Policy
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[67.5px] w-auto">
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtRobotoRegular14WhiteA700">Contact Us</Text>
                    </a>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[823px] p-1 md:px-5 w-[17%] md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-200 text-right"
                    size="txtRobotoBold50"
                  >
                    18+
                  </Text>
                  <Text
                    className="mr-[25px] mt-1.5 text-base text-gray-200 text-right"
                    size="txtRobotoRegular16Gray200"
                  >
                    © 2022 Betboard
                  </Text>
                  <Text
                    className="mt-7 text-base text-gray-200 text-right"
                    size="txtRobotoBold16Gray200"
                  >
                    Follow us
                  </Text>
                  <Img
                    className="h-8 mb-[9px] mt-[15px] w-[116px]"
                    src="images/img_footermodule.svg"
                    alt="footermodule_Three"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TournamentsPage;
