import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Line, Button, Stack } from "components";

const ServicesPage = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate("/about");
  }
  function handleNavigate31() {
    navigate("/projects");
  }
  function handleNavigate34() {
    navigate("/home1");
  }
  function handleNavigate35() {
    navigate("/about");
  }
  function handleNavigate36() {
    navigate("/projects");
  }
  function handleNavigate37() {
    navigate("/contactus");
  }

  return (
    <>
      <Column className="bg-white_A700 font-ibmplexsans items-center justify-end mx-[auto] lg:pt-[45px] xl:pt-[51px] 2xl:pt-[58px] 3xl:pt-[69px] w-[100%]">
        <Row className="items-center w-[79%]">
          <Img
            src="images/img_map.svg"
            className="lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:w-[58px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
            alt="map"
          />
          <Text
            className="common-pointer font-normal lg:ml-[388px] xl:ml-[444px] 2xl:ml-[500px] 3xl:ml-[600px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate34}
          >
            Home
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate35}
          >
            About
          </Text>
          <Column className="items-center lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] w-[7%]">
            <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              Services
            </Text>
            <Line className="bg-black_900 h-[4px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
          </Column>
          <Text
            className="common-pointer font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate36}
          >
            Projects
          </Text>
          <Button
            className="common-pointer font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[8%]"
            onClick={handleNavigate37}
          >
            Contact us
          </Button>
        </Row>
        <Column className="font-inter items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
          <Stack className="lg:h-[1953px] xl:h-[2234px] 2xl:h-[2513px] 3xl:h-[3015px] w-[100%]">
            <Stack className="absolute lg:h-[1953px] xl:h-[2234px] 2xl:h-[2513px] 3xl:h-[3015px] w-[100%]">
              <Stack className="absolute lg:h-[1953px] xl:h-[2234px] 2xl:h-[2513px] 3xl:h-[3015px] w-[100%]">
                <Column className="absolute w-[100%]">
                  <Stack className="lg:h-[1200px] xl:h-[1372px] 2xl:h-[1544px] 3xl:h-[1852px] w-[100%]">
                    <Stack className="absolute 2xl:h-[1065px] 3xl:h-[1278px] lg:h-[828px] xl:h-[947px] top-[0] w-[100%]">
                      <Column
                        className="absolute bg-cover bg-repeat justify-end lg:p-[46px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] top-[0] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group7.png')",
                        }}
                      >
                        <Text className="font-ibmplexsans font-semibold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-indigo_900 w-[40%]">
                          Construction
                          <br />
                          Excellence &<br />
                          Sustainability.
                        </Text>
                        <Text className="font-inter font-normal leading-[normal] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[34%]">
                          We perform a comprehensive variety of services
                          particularly <br />
                          focused on engineering research, construction,
                          procurement, <br />
                          design, consultancy <br />
                          and general contract.{" "}
                        </Text>
                        <Button className="font-ibmplexsans font-normal 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[11%]">
                          Download Profile
                        </Button>
                      </Column>
                      <Column className="absolute bg-white_A700 bottom-[0] items-center left-[0] 3xl:p-[108px] lg:p-[70px] xl:p-[80px] 2xl:p-[90px] w-[49%]">
                        <Text className="font-ibmplexsans font-semibold leading-[normal] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[49%]">
                          Infrastructure Construction
                        </Text>
                        <Text className="font-inter font-normal leading-[normal] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] lg:mb-[91px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[78%]">
                          We build sustainable and quality Roads, Bridges,
                          Drainage, Maintenance
                          <br />
                          that suits the need of our clients, delivering.
                        </Text>
                      </Column>
                    </Stack>
                    <Img
                      src="images/img_rectangle35.png"
                      className="absolute bottom-[0] lg:h-[378px] xl:h-[433px] 2xl:h-[487px] 3xl:h-[584px] w-[100%]"
                      alt="RectangleThirtyFive"
                    />
                  </Stack>
                  <div className="bg-black_900 lg:h-[378px] xl:h-[433px] 2xl:h-[487px] 3xl:h-[584px] lg:mt-[375px] xl:mt-[429px] 2xl:mt-[483px] 3xl:mt-[579px] w-[49%]"></div>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[19%] items-center justify-end left-[0] 2xl:p-[110px] 3xl:p-[132px] lg:p-[85px] xl:p-[97px] w-[49%]">
                  <Text className="font-ibmplexsans font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                    Borehole
                  </Text>
                  <Text className="font-inter font-normal leading-[normal] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[87%]">
                    We offer excellent water well drilling services, as a
                    hygiene solution provider, our focus is to provide clean
                    hygienic water supply that meets the need of the growing
                    population
                  </Text>
                </Column>
                <Img
                  src="images/img_imgforabout.png"
                  className="absolute lg:h-[378px] xl:h-[433px] 2xl:h-[487px] 3xl:h-[584px] right-[0] top-[23%] w-[51%]"
                  alt="ImgforAbout"
                />
              </Stack>
              <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center justify-center my-[auto] lg:p-[109px] xl:p-[125px] 2xl:p-[141px] 3xl:p-[169px] right-[0] w-[51%]">
                <Text className="font-bold mt-[1px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                  Building Construction
                </Text>
                <Text className="font-normal leading-[normal] lg:my-[36px] xl:my-[41px] 2xl:my-[47px] 3xl:my-[56px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[82%]">
                  We specialize in the provision of sustainable personal and
                  mass housing projects, across Nigeria.{" "}
                </Text>
              </Column>
              <Column className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[100px] xl:p-[114px] 2xl:p-[129px] 3xl:p-[154px] right-[0] w-[51%]">
                <Text className="font-bold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                  Electricfication
                </Text>
                <Text className="font-normal leading-[normal] lg:mb-[45px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[70px] ml-[2px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[73%]">
                  We construct and install Streetlights, Traffic Lights, Solar,
                  Boleholes, <br />
                  <br />
                  Residential Lights
                </Text>
              </Column>
            </Stack>
            <Img
              src="images/img_imgforabout_486X732.png"
              className="absolute bottom-[19%] lg:h-[378px] xl:h-[433px] 2xl:h-[487px] 3xl:h-[584px] right-[0] w-[51%]"
              alt="ImgforAbout One"
            />
          </Stack>
          <Stack className="font-ibmplexsans lg:h-[1318px] xl:h-[1507px] 2xl:h-[1696px] 3xl:h-[2034px] w-[100%]">
            <Stack className="absolute bottom-[5%] xl:h-[1056px] 2xl:h-[1188px] 3xl:h-[1426px] lg:h-[924px] inset-x-[0] w-[100%]">
              <div className="absolute bg-white_A700 bottom-[0] lg:h-[542px] xl:h-[620px] 2xl:h-[697px] 3xl:h-[836px] inset-x-[0] w-[100%]"></div>
              <Column className="absolute bg-white_A700 inset-x-[0] justify-end lg:p-[50px] xl:p-[57px] 2xl:p-[65px] 3xl:p-[78px] top-[0] w-[100%]">
                <Row className="items-center lg:ml-[64px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] mr-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[62%]">
                  <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                    Testimonials
                  </Text>
                  <Text className="font-semibold lg:ml-[281px] xl:ml-[322px] 2xl:ml-[362px] 3xl:ml-[434px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                    Our Clients
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] 3xl:mr-[105px] lg:mr-[68px] xl:mr-[78px] 2xl:mr-[88px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[87%]">
                  <Column className="bg-red_A700 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[49%]">
                    <Row className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[96%]">
                      <Img
                        src="images/img_ellipse10.png"
                        className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] rounded-radius50 w-[25%]"
                        alt="EllipseTen"
                      />
                      <Text className="font-medium leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[71%]">
                        “Throughout the construction process IIC Construction
                        was efficient, approachable, flexible and we felt that
                        we were getting both good value and tremendous support.{" "}
                        <br />
                        They offered continuity of on-site personnel and
                        management keeping watch over the entire project. IIC
                        Construction is a first-class outfit to deal with and we
                        would have no hesitation whatsoever in recommending the
                        company.”
                      </Text>
                    </Row>
                    <Text className="font-semibold lg:mb-[45px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[70px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Mgt. FERMA
                    </Text>
                  </Column>
                  <Column className="bg-indigo_900 font-inter items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[40px] xl:p-[46px] 2xl:p-[52px] 3xl:p-[62px] w-[49%]">
                    <Column className="items-center lg:my-[14px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] rounded-radius10 w-[96%]">
                      <Row className="justify-between w-[92%]">
                        <Img
                          src="images/img_rectangle16.png"
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] rounded-radius10 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                          alt="RectangleSixteen"
                        />
                        <Img
                          src="images/img_rectangle18.png"
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius10 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                          alt="RectangleEighteen"
                        />
                        <Img
                          src="images/img_rectangle19.png"
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] my-[3px] rounded-radius10 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                          alt="RectangleNineteen"
                        />
                      </Row>
                      <Row className="justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                        <Text className="font-bold leading-[normal] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[22%]">
                          Federal Ministry <br />
                          of Power, Works, <br />& Housing
                        </Text>
                        <Text className="font-bold leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[26%]">
                          Federal Ministry <br />
                          of Agriculture & <br />
                          Rural Development
                        </Text>
                        <Text className="font-bold leading-[normal] my-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[18%]">
                          Niger Delta
                          <br />
                          Development
                          <br />
                          Commission
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[92%]">
                        <Img
                          src="images/img_rectangle21.png"
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius10 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                          alt="RectangleTwentyOne"
                        />
                        <Img
                          src="images/img_rectangle22.png"
                          className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] rounded-radius10 w-[15%]"
                          alt="RectangleTwentyTwo"
                        />
                        <Img
                          src="images/img_rectangle23.png"
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius10 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                          alt="RectangleTwentyThree"
                        />
                      </Row>
                      <Row className="items-center mt-[3px] w-[97%]">
                        <Text className="font-bold leading-[normal] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[18%]">
                          Millenium <br />
                          Development <br />
                          Goals
                        </Text>
                        <Text className="font-bold leading-[normal] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[19%]">
                          Federal Roads
                          <br />
                          Maintenance
                          <br />
                          Agency
                        </Text>
                        <Text className="font-bold leading-[normal] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[22%]">
                          Federal Ministry <br />
                          of Environment
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Stack>
            <footer className="absolute bg-indigo_900 bottom-[0] w-[100%]">
              <Row className="w-[80%]">
                <Column className="mt-[1px] w-[24%]">
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:w-[58px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    alt="clock"
                  />
                  <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                    IIC Constructions Limited
                  </Text>
                  <Text className="font-light leading-[normal] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[58%]">
                    committed to total <br />
                    service delivery.{" "}
                  </Text>
                </Column>
                <Text className="font-semibold leading-[normal] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[26%]">
                  <span className="text-white_A700 font-ibmplexsans font-bold">
                    Contact
                    <br />
                  </span>
                  <span className="text-white_A700 font-ibmplexsans font-normal not-italic">
                    <br />
                    Suite 308A DBM Plaza, <br />
                    <br />
                    Plot 1381-1383, <br />
                    Aminu Kano Crescent <br />
                    <br />
                    Wuse II, Abuja. <br />
                    <br />
                    Email: info@iicconstructions.com
                    <br />
                    <br />
                    Tel: +234 803 311 7337, <br /> +234 703 535 2904.
                  </span>
                </Text>
                <Column className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] mt-[1px] w-[44%]">
                  <Row className="items-center justify-between ml-[3px] w-[96%]">
                    <Text
                      className="common-pointer font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                      onClick={handleNavigate30}
                    >
                      OUR COMPANY
                    </Text>
                    <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                      OUR SERVICES
                    </Text>
                    <Text
                      className="common-pointer font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                      onClick={handleNavigate31}
                    >
                      OUR PROJECTS
                    </Text>
                  </Row>
                  <Row className="items-center ml-[3px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[99%]">
                    <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                      OUR PARTNERS
                    </Text>
                    <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                      CONTACT{" "}
                    </Text>
                    <Text className="font-semibold lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                      PRIVATE POLICY
                    </Text>
                  </Row>
                  <Text className="font-semibold lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                    (C) 2022 CQRE INC. | STUDIO. All Rights Reserved
                  </Text>
                </Column>
              </Row>
            </footer>
            <Line className="absolute bg-white_A700 bottom-[11%] h-[1px] inset-x-[0] w-[100%]" />
            <Stack
              className="absolute bg-cover bg-repeat lg:h-[335px] xl:h-[383px] 2xl:h-[431px] 3xl:h-[517px] overflow-auto pl-[2px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group8.png')" }}
            >
              <Column className="absolute bottom-[15%] left-[10%] w-[29%]">
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
                  Have a project?
                </Text>
                <Text className="font-normal leading-[normal] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[100%]">
                  We have a proven track record in providing the right team with
                  the skills, knowledge and experience to consistently deliver
                  challenging projects.{" "}
                </Text>
                <Column className="bg-red_A700 items-center ml-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[42%]">
                  <Text className="font-semibold mb-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                    Get in touch
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_rectangle11.png"
                className="absolute bottom-[0] lg:h-[332px] xl:h-[379px] 2xl:h-[427px] 3xl:h-[512px] w-[100%]"
                alt="RectangleEleven"
              />
            </Stack>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default ServicesPage;
