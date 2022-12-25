import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Line, Button, Stack } from "../../components";

const AboutPage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/");
  }
  function handleNavigate9() {
    navigate("/services");
  }
  function handleNavigate10() {
    navigate("/projects");
  }
  function handleNavigate11() {
    navigate("/contactus");
  }
  function handleNavigate12() {
    navigate("/services");
  }
  function handleNavigate13() {
    navigate("/projects");
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
            onClick={handleNavigate8}
          >
            Home
          </Text>
          <Column className="items-center lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[5%]">
            <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              About
            </Text>
            <Line className="bg-black_900 h-[4px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
          </Column>
          <Text
            className="common-pointer font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate9}
          >
            Services
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate10}
          >
            Projects
          </Text>
          <Button
            className="common-pointer font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[20%]"
            onClick={handleNavigate11}
          >
            Contact us
          </Button>
        </Row>
        <Column className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]">
          <Stack className="lg:h-[1642px] xl:h-[1878px] 2xl:h-[2113px] 3xl:h-[2535px] w-[100%]">
            <Column
              className="absolute bg-cover bg-repeat justify-end lg:p-[41px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[63px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group27.png')" }}
            >
              <Text className="font-semibold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-indigo_900 w-[46%]">
                Redefining
                <br />
                the Construction
                <br />
                Experience.
              </Text>
              <Text className="font-normal leading-[normal] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[31%]">
                A customer-first approach, delivering quality
                projects from inception to completion on time
                and within budgeted time frame.{" "}
              </Text>
              <Button className="font-normal 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[11%]">
                Download Profile
              </Button>
            </Column>
            <Column className="absolute bg-yellow_100 bottom-[0] inset-x-[0] lg:p-[45px] xl:p-[52px] 2xl:p-[59px] 3xl:p-[70px] w-[100%]">
              <Row className="3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] w-[60%]">
                <Text className="font-semibold lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                  Our Vision
                </Text>
                <Text className="font-semibold lg:ml-[301px] xl:ml-[345px] 2xl:ml-[388px] 3xl:ml-[465px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                  Our Mission
                </Text>
              </Row>
              <Row className="font-inter items-center 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[87%]">
                <Stack className="lg:h-[377px] xl:h-[431px] 2xl:h-[485px] 3xl:h-[582px] w-[49%]">
                  <Column className="absolute bg-indigo_900 items-center justify-end lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] top-[0] w-[100%]">
                    <Text className="font-normal leading-[normal] lg:mt-[150px] xl:mt-[171px] 2xl:mt-[193px] 3xl:mt-[231px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[88%]">
                      To become a world-class alternative Construction
                      technology creation, development and deployment company
                      that will address African’s civil engineering crisis while
                      ensuring Sustainable environment for Nigeria and African
                      citizen and its economy to thrive.
                      <br />
                    </Text>
                  </Column>
                  <Img
                    src="images/img_visionimage.png"
                    className="absolute lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] top-[0] w-[100%]"
                    alt="VisionImage"
                  />
                </Stack>
                <Column className="bg-indigo_900 items-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 3xl:pb-[104px] lg:pb-[67px] xl:pb-[77px] 2xl:pb-[87px] w-[49%]">
                  <Img
                    src="images/img_misionimage.png"
                    className="lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] w-[100%]"
                    alt="MisionImage"
                  />
                  <Text className="font-normal leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[79%]">
                    To continue in our uncompromising efforts in being a dynamic
                    construction leader through our state of the art equipment,
                    improvement with particular attention to our social
                    responsibility.
                  </Text>
                </Column>
              </Row>
              <Row className="font-ibmplexsans lg:mb-[59px] xl:mb-[68px] 2xl:mb-[77px] 3xl:mb-[92px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[87%]">
                <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[61%]">
                  <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                    CEO’s Message
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[89%]">
                    As a Leading Indigenous Construction Company, our primary
                    objective is based on addressing Nigeria’s fundamental
                    engineering problem of research, procurement and
                    construction of long-lasting road & bridges,
                    electrification, Dredging, Drilling, Building, Supplies,
                    importing and maintaining a standard of Engineering and
                    adopting a quality assurance procures. We seek constantly to
                    improve and develop our client. Our differentiated services
                    have become synonymous with excellent and we are quickly
                    being identified as a solution providers across the
                    engineering industry.
                    <br />
                    <br />
                    <br />
                    We believe in quality and operate a control plan which is
                    implement on every project to ensure IIC construction
                    maintains performance and quality of the highest standard,
                    Health and safety is a top priority at IIC construction co.
                    Ltd. We make every effort to achieve an accident free in the
                    workplace by eliminating workplace hazards where necessary.
                    We seek constantly to improve and develop our service to our
                    client; we appreciate the board for their hard work and
                    professionalism during a period of considerable development.{" "}
                    <br />
                    <br />
                    Finally, I would like to welcome both private and
                    governmental bodies to do business with I.I.C construction
                    company limited; we look forward to seeing you.
                    <br />
                  </Text>
                </Column>
                <Stack className="lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] w-[39%]">
                  <Img
                    src="images/img_ceosimage.png"
                    className="absolute lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] right-[0] w-[100%]"
                    alt="CEOsImage"
                  />
                  <div className="absolute bg-lime_700 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] top-[0] w-[100%]"></div>
                </Stack>
              </Row>
            </Column>
          </Stack>
          <Row className="bg-white_A700 2xl:p-[109px] 3xl:p-[130px] lg:p-[84px] xl:p-[96px] w-[100%]">
            <Column className="lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[29%]">
              <Text className="font-light ml-[1px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-indigo_900 w-[auto]">
                Build Together
              </Text>
              <Text className="font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-red_A700 w-[auto]">
                Meet the team
              </Text>
            </Column>
            <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[66%]">
              <Row className="items-center justify-between w-[98%]">
                <Img
                  src="images/img_rectangle29.png"
                  className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[28%]"
                  alt="RectangleTwentyNine"
                />
                <Img
                  src="images/img_rectangle30.png"
                  className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[28%]"
                  alt="RectangleThirty"
                />
                <Img
                  src="images/img_rectangle31.png"
                  className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[28%]"
                  alt="RectangleThirtyOne"
                />
              </Row>
              <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Text className="font-semibold leading-[normal] mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[25%]">
                  <span className="text-black_900 font-ibmplexsans">
                    Rosemary U. Igwe
                    <br />
                  </span>
                  <span className="text-red_A700 font-ibmplexsans font-light lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Executive Director{" "}
                  </span>
                </Text>
                <Text className="font-semibold leading-[normal] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[31%]">
                  <span className="text-black_900 font-ibmplexsans">
                    Engr. Pierre B. Karim
                    <br />
                  </span>
                  <span className="text-red_A700 font-ibmplexsans font-light lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Project / Technical Manager
                  </span>
                </Text>
                <Text className="font-semibold leading-[normal] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[29%]">
                  <span className="text-black_900 font-ibmplexsans">
                    Engr. Godwin Gabriel
                    <br />
                  </span>
                  <span className="text-red_A700 font-ibmplexsans font-light lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Civil Engineer
                  </span>
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[98%]">
                <Img
                  src="images/img_rectangle32.png"
                  className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[28%]"
                  alt="RectangleThirtyTwo"
                />
                <Img
                  src="images/img_rectangle33.png"
                  className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[28%]"
                  alt="RectangleThirtyThree"
                />
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[28%]"
                  alt="RectangleThirtyFour"
                />
              </Row>
              <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[91%]">
                <Text className="font-semibold leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[30%]">
                  <span className="text-black_900 font-ibmplexsans">
                    Nzubechi S. Isikaku
                    <br />
                  </span>
                  <span className="text-red_A700 font-ibmplexsans font-light lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Mechanical Manager
                  </span>
                </Text>
                <Text className="font-semibold leading-[normal] lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[25%]">
                  <span className="text-black_900 font-ibmplexsans">
                    Chigozie Osuoha
                    <br />
                  </span>
                  <span className="text-red_A700 font-ibmplexsans font-light lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Manager
                  </span>
                </Text>
                <Text className="font-semibold leading-[normal] 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[23%]">
                  <span className="text-black_900 font-ibmplexsans">
                    Victoria Obodo
                    <br />
                  </span>
                  <span className="text-red_A700 font-ibmplexsans font-light lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Secretary
                  </span>
                </Text>
              </Row>
            </Column>
          </Row>
          <Stack className="lg:h-[332px] lg:mt-[50px] w-[100%]">
            <Img
              src="images/img_rectangle11_426X1438.png"
              className="absolute h-[326px] pt-[3px] w-[100%]"
              alt="RectangleEleven"
            />
            <Column className="absolute justify-end left-[0] w-[100%]">
              <Text className="font-semibold lg:ml-[64px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
                Have a project?
              </Text>
              <Text className="font-normal leading-[normal] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[31%]">
                We have a proven track record in providing the right team with
                the skills, knowledge and experience to consistently deliver
                challenging projects.{" "}
              </Text>
              <Column className="bg-red_A700 items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[13%]">
                <Text className="font-semibold mb-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                  Get in touch
                </Text>
              </Column>
            </Column>
            <Img
              src="images/img_rectangle53.png"
              className="absolute lg:h-[332px] bottom-[1px] left-[0] w-[100%]"
              alt="RectangleFiftyThree"
            />
          </Stack>
          <Stack className="xl:h-[1126px] 2xl:h-[1266px] 3xl:h-[1519px] lg:h-[984px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Stack className="absolute lg:h-[613px] xl:h-[701px] 2xl:h-[789px] 3xl:h-[947px] inset-x-[0] top-[0] w-[100%]">
              <Img
                src="images/img_rectangle12.png"
                className="absolute bottom-[0] lg:h-[542px] xl:h-[620px] 2xl:h-[697px] 3xl:h-[836px] inset-x-[0] w-[100%]"
                alt="RectangleTwelve"
              />
              <Column className="absolute bg-white_A700 lg:p-[47px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] top-[0] w-[100%]">
                <Row className="items-center 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[63%]">
                  <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                    Testimonials
                  </Text>
                  <Text className="font-semibold lg:ml-[325px] lg:text-[31px] text-indigo_900 w-[auto]">
                    Some Clients
                  </Text>
                </Row>
                <Row className="items-center lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[87%]">
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
                    <Text className="font-semibold lg:mb-[45px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[70px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
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
            <footer className="absolute bg-indigo_900 bottom-[0] pt-[50px] w-[100%]">
              <Column className="items-center w-[100%]">
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
                    <Row className="items-center justify-between ml-[3px] w-[97%]">
                      <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                        OUR COMPANY
                      </Text>
                      <Text
                        className="common-pointer font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={handleNavigate12}
                      >
                        OUR SERVICES
                      </Text>
                      <Text
                        className="common-pointer font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={handleNavigate13}
                      >
                        {" "}
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
                <Line className="bg-white_A700 h-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]" />
              </Column>
            </footer>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default AboutPage;
