import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Line, Button, Stack, List } from "../../components";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate14() {
    navigate("/projects");
  }
  function handleNavigate19() {
    navigate("/services");
  }
  function handleNavigate20() {
    navigate("/services");
  }
  function handleNavigate21() {
    navigate("/services");
  }
  function handleNavigate22() {
    navigate("/services");
  }
  function handleNavigate23() {
    navigate("/about");
  }
  function handleNavigate24() {
    navigate("/services");
  }
  function handleNavigate25() {
    navigate("/projects");
  }
  function handleNavigate26() {
    navigate("/contactus");
  }
  function handleNavigate27() {
    navigate("/about");
  }
  function handleNavigate28() {
    navigate("/services");
  }
  function handleNavigate29() {
    navigate("/projects");
  }
  function handleNavigate32() {
    navigate("/about");
  }
  function handleNavigate33() {
    navigate("/services");
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
          <Column className="items-center lg:ml-[388px] xl:ml-[444px] 2xl:ml-[500px] 3xl:ml-[600px] w-[5%]">
            <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              Home
            </Text>
            <Line className="bg-black_900 h-[4px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
          </Column>
          <Text
            className="common-pointer font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate32}
          >
            About
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate33}
          >
            Services
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate25}
          >
            Projects
          </Text>
          <Button
            className="common-pointer font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[20%]"
            onClick={handleNavigate26}
          >
            Contact us
          </Button>
        </Row>
        <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]">
          <Stack className="lg:h-[1067px] xl:h-[1220px] 2xl:h-[1372px] 3xl:h-[1647px] w-[100%]">
            <Column
              className=" bg-cover bg-repeat justify-end lg:p-[41px] z-40 top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group17.png')" }}
            >
              <Text className="font-semibold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-indigo_900 w-[38%]">
                Committed to
                <br />
                Total Service <br />
                Delivery.
              </Text>
              <Text className="font-normal leading-[normal] 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[31%]">
                A customer-first approach, delivering quality
                projects from inception to completion on time
                and within budgeted time frame.{" "}
              </Text>
              <a href="/profile.pdf" download>
              <Button download className="font-normal 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[11%]">
                
                Download Profile
              </Button>
              </a>
            </Column>
            <Column className="absolute bg-indigo_900 bottom-[0.5] justify-end lg:p-[25px] w-[100%]">
              <Text className="font-semibold 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
                Who we are
              </Text>
              <Row className="items-center 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[84%]">
                <Img
                  src="images/img_imgforabout_225X326.png"
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] w-[29%]"
                  alt="ImgforAbout"
                />
                <Img
                  src="images/img_imgforservice.png"
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] w-[28%]"
                  alt="imgforservice"
                />
                <Img
                  src="images/img_imgeforprojec.png"
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] w-[29%]"
                  alt="imgeforprojec"
                />
              </Row>
              <Row className="2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] mr-[auto] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[73%]">
                <Text className="font-medium mt-[3px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-lime_700 w-[auto]">
                  Our Company
                </Text>
                <Text className="font-medium mb-[3px] lg:ml-[220px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-lime_700 w-[auto]">
                  Our Services
                </Text>
                <Text className="font-medium lg:ml-[220px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-lime_700 w-[auto]">
                  Our Projects
                </Text>
              </Row>
              <Row className="2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[83%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[27%]">
                  I.I.C Construction is a leading indigenous civil engineering
                  company, <br />
                  pro-active in the following project; (Road Construction, Solar
                  Streetlight Electrification, Borehole, Building, Consultancy,{" "}
                  <br />
                  Supply & General Contract).
                </Text>
                <Text className="font-normal leading-[normal] 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[28%]">
                  We perform a comprehensive variety of services particularly{" "}
                  <br />
                  focused on engineering research, construction, procurement,{" "}
                  <br />
                  design, consultancy and general contract.{" "}
                </Text>
                <Text className="font-normal leading-[normal] 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[28%]">
                  We have a proven track record in providing the right team with
                  the skills, knowledge and experience to consistently deliver
                  challenging projects
                </Text>
              </Row>
              <Row className="2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] mr-[auto] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[68%]">
                <Button
                  className="common-pointer font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                  onClick={handleNavigate27}
                >
                  About us{" "}
                </Button>
                <Button
                  className="common-pointer font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[245px] xl:ml-[281px] 2xl:ml-[316px] 3xl:ml-[379px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[13%]"
                  onClick={handleNavigate28}
                >
                  View Services
                </Button>
                <Button
                  className="common-pointer font-normal lg:ml-[224px] xl:ml-[257px] 2xl:ml-[289px] 3xl:ml-[347px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[13%]"
                  onClick={handleNavigate29}
                >
                  View Projects
                </Button>
              </Row>
            </Column>
          </Stack>
          <Text className="font-medium lg:ml-[350px] xl:ml-[400px] 2xl:ml-[450px] 3xl:ml-[540px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-lime_700 w-[auto]">
            Trusted By Top Nigerian Parastalats
          </Text>
          <Row className="lg:ml-[205px] xl:ml-[234px] 2xl:ml-[264px] 3xl:ml-[316px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[57%]">
            <Img
              src="images/img_ellipse1.png"
              className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] rounded-radius50 xl:w-[111px] 2xl:w-[125px] 3xl:w-[150px] lg:w-[97px]"
              alt="EllipseOne"
            />
            <Img
              src="images/img_ellipse2.png"
              className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] rounded-radius50 xl:w-[111px] 2xl:w-[125px] 3xl:w-[150px] lg:w-[97px]"
              alt="EllipseTwo"
            />
            <Img
              src="images/img_ellipse3.png"
              className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 xl:w-[111px] 2xl:w-[125px] 3xl:w-[150px] lg:w-[97px]"
              alt="EllipseThree"
            />
            <Img
              src="images/img_rectangle18.png"
              className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] rounded-radius50 xl:w-[111px] 2xl:w-[125px] 3xl:w-[150px] lg:w-[97px]"
              alt="EllipseFour"
            />
          </Row>
          <Text className="font-normal italic leading-[normal] lg:ml-[297px] xl:ml-[339px] 2xl:ml-[382px] 3xl:ml-[458px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[47%]">
            IIC construction maintains performance and quality of the highest
            standard, Health and safety is a top priority
          </Text>
          <Stack className="lg:h-[1900px] lg:mt-[21px] w-[100%]">
            <Stack className="absolute lg:h-[1650px] top-[0] w-[100%]">
              <Stack className="absolute bottom-[0] lg:h-[2000px] w-[100%]">
                <Stack className="absolute lg:h-[1500px] top-[3] w-[100%]">
                  <Stack className="absolute lg:h-[1500px] w-[100%]">
                    
                    <Column className="absolute bg-yellow_100 inset-x-[0] lg:p-[50px] top-[0] w-[100%]">
                      <Text className="font-semibold 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                        What we do
                      </Text>
                      <List
                        className="gap-[0] min-h-[auto] lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[88%]"
                        orientation="vertical"
                      >
                        <Row className="items-center justify-between lg:my-[30px] xl:my-[34px] 2xl:my-[39px] 3xl:my-[46px] w-[100%]">
                          <Column className="bg-white_A700 items-center mb-[1px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[45%]">
                            <Img
                              src="images/bridge1.JPG"
                              className="lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] rounded-radius50 lg:w-[113px] xl:w-[129px] 2xl:w-[146px] 3xl:w-[175px]"
                              alt="EllipseSix"
                            />
                            <Text className="font-semibold leading-[normal] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[93%]">
                              <span className="text-indigo_900 font-inter font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                Infrastructure Construction
                                <br />
                              </span>
                              <span className="text-black_900 font-inter font-normal not-italic">
                                <br />
                                We build sustainable and quality Roads, <br />
                                Bridges, Drainage, Maintenance that suits the
                                need of our clients, delivering.
                              </span>
                            </Text>
                            <Button
                              className="common-pointer font-normal 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[29%]"
                              onClick={handleNavigate19}
                            >
                              View more
                            </Button>
                          </Column>
                          <Column className="bg-white_A700 items-center mt-[1px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[45%]">
                            <Img
                              src="images/FDWA2602.JPG"
                              className="lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] rounded-radius50 lg:w-[113px] xl:w-[129px] 2xl:w-[146px] 3xl:w-[175px]"
                              alt="EllipseEleven"
                            />
                            <Text className="font-semibold leading-[normal] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[90%]">
                              <span className="text-indigo_900 font-inter font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                Building Construction
                              </span>
                              <span className="text-black_900 font-inter font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                {" "}
                                <br />
                              </span>
                              <span className="text-black_900 font-inter font-normal not-italic">
                                <br />
                                We specialize in the provision of sustainable
                                personal and mass housing projects,
                                <br />
                                across Nigeria.{" "}
                              </span>
                            </Text>
                            <Button
                              className="common-pointer font-normal lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[29%]"
                              onClick={handleNavigate21}
                            >
                              View more
                            </Button>
                          </Column>
                        </Row>
                        <Row className="items-center justify-between lg:my-[30px] xl:my-[34px] 2xl:my-[39px] 3xl:my-[46px] w-[100%]">
                          <Column className="bg-white_A700 items-center lg:p-[24px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[45%]">
                            <Img
                              src="images/img_ellipse8.png"
                              className="lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] rounded-radius50 lg:w-[113px] xl:w-[129px] 2xl:w-[146px] 3xl:w-[175px]"
                              alt="EllipseEight"
                            />
                            <Text className="font-semibold leading-[normal] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[90%]">
                              <span className="text-indigo_900 font-inter font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                Borehole
                                <br />
                              </span>
                              <span className="text-black_900 font-inter font-normal not-italic">
                                <br />
                              </span>
                              <span className="text-black_900 font-inter font-normal not-italic">
                                We offer excellent water well drilling services,
                                as a hygiene solution provider, our focus is to
                                provide clean hygienic water supply that meets
                                the need of the growing population
                              </span>
                            </Text>
                            <Button
                              className="common-pointer font-normal mb-[2px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[29%]"
                              onClick={handleNavigate20}
                            >
                              View more
                            </Button>
                          </Column>
                          <Column className="bg-white_A700 items-center lg:p-[24px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[45%]">
                          <Img
                              src="images/light2.jpg"
                              className="lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] rounded-radius50 lg:w-[113px] xl:w-[129px] 2xl:w-[146px] 3xl:w-[175px]"
                              alt="EllipseEight"
                            />
                            <Text className="font-semibold leading-[normal] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center w-[76%]">
                              <span className="text-indigo_900 font-inter font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                                Electrification
                                <br />
                              </span>
                              <span className="text-black_900 font-inter font-normal not-italic">
                                <br />
                                We construct and install Streetlights, Traffic
                                Lights, Solar, Boleholes, <br />
                                <br />
                                Residential Lights
                              </span>
                            </Text>
                            <Button
                              className="common-pointer font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[30%]"
                              onClick={handleNavigate22}
                            >
                              View more
                            </Button>
                          </Column>
                        </Row>
                      </List>
                    </Column>
                  </Stack>
                </Stack>
              </Stack>
              <Column className="absolute bg-white_A700 bottom-[0] pb-[100px] mb-[200px] inset-x-[0] lg:pt-[5px] lg:px-[100px] w-[100%]">
                <Row className="items-center lg:ml-[66px] w-[63%]">
                  <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                    Testimonial
                  </Text>
                  <Text className="font-semibold lg:ml-[274px] xl:ml-[314px] 2xl:ml-[353px] 3xl:ml-[423px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                    Some Clients
                  </Text>
                </Row>
                <Row className="items-center lg:mb-[15px] xl:mb-[9px] lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mr-[56px] xl:mr-[64px] 2xl:mr-[73px] 3xl:mr-[87px] lg:mt-[20px] w-[88%]">
                  <Column className="bg-red_A700 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[49%]">
                    <Row className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[96%]">
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
            <footer className="absolute bg-indigo_900 pt-[50px] bottom-[0] w-[100%]">
              <Column className="items-center w-[100%]">
                <Row className="w-[80%]">
                  <Column className="mt-[1px] w-[24%]">
                    <Img
                      src="images/img_clock_75X75.svg"
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
                  <Column className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[44%]">
                    <Row className="items-center w-[96%]">
                      <Text
                        className="common-pointer font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={handleNavigate23}
                      >
                        OUR COMPANY
                      </Text>
                      <Text
                        className="common-pointer font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={handleNavigate24}
                      >
                        OUR SERVICES
                      </Text>
                      <Text
                        className="common-pointer font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={handleNavigate14}
                      >
                        OUR PROJECTS
                      </Text>
                    </Row>
                    <Row className="items-center ml-[3px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[99%]">
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
                <Line className="bg-white_A700 h-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]" />
              </Column>
            </footer>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;
