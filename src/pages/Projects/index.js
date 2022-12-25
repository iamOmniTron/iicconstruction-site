import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Line, Button, List, Stack } from "../../components";

const ProjectsPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/services");
  }
  function handleNavigate2() {
    navigate("/");
  }
  function handleNavigate3() {
    navigate("/about");
  }
  function handleNavigate4() {
    navigate("/services");
  }
  function handleNavigate5() {
    navigate("/contactus");
  }
  function handleNavigate6() {
    navigate("/contactus");
  }
  function handleNavigate7() {
    navigate("/about");
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
            onClick={handleNavigate2}
          >
            Home
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate3}
          >
            About
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate4}
          >
            Services
          </Text>
          <Column className="items-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[7%]">
            <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              Projects
            </Text>
            <Line className="bg-black_900 h-[4px] mt-[3px] w-[95%]" />
          </Column>
          <Button
            className="common-pointer font-semibold lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[20%]"
            onClick={handleNavigate6}
          >
            Contact us
          </Button>
        </Row>
        <Column className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]">
        <Column
              className=" bg-cover bg-repeat justify-end lg:p-[41px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[63px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/new.PNG')" }}
            >
              <Text className="font-semibold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] lg:mr-[410px] xl:mr-[469px] 2xl:mr-[528px] 3xl:mr-[633px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-indigo_900 w-[53%]">
              Bringing your ideas <br />
              to live with a great <br />
              team & experience
              </Text>
              <Text className="font-normal leading-[normal] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[31%]">
               We perform a comprehensive variety of services particularly focused on engineering research, construction, procurement, design, consultancy and general contract
              </Text>
              <Button className="font-normal 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[11%]">
                Download Profile
              </Button>
            </Column>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[90%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group38.png')" }}
              >
                <Text className="font-semibold leading-[normal] mb-[4px] lg:mt-[213px] xl:mt-[243px] 2xl:mt-[274px] 3xl:mt-[328px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[85%]">
                  Rehabilitation of Odo-Ona Elewe Idiayunre-Mamu Ogun State.
                  Border.
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group40.png')" }}
              >
                <Text className="font-semibold leading-[normal] lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] lg:mt-[213px] xl:mt-[244px] 2xl:mt-[275px] 3xl:mt-[330px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[99%]">
                  General maintenance of Ogoja Ikom road , with spur to Okundi
                  in Cross-River State.
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group42.png')" }}
              >
                <Text className="font-semibold leading-[normal] lg:mt-[204px] xl:mt-[233px] 2xl:mt-[263px] 3xl:mt-[315px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[89%]">
                  Rehabilitation of two(2) outstanding sections of Oba Nnewi
                  Arondizuogu-Okigwe road in Imo State.
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-between 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group34.png')" }}
              >
                <Text className="font-semibold leading-[normal] mb-[3px] lg:mt-[192px] xl:mt-[220px] 2xl:mt-[248px] 3xl:mt-[297px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[91%]">
                  Emergency repair of Erosion Washouts & Collapsed Slope Along
                  9th Mile-Otukpo{" "}
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[38px] xl:p-[43px] 2xl:p-[49px] 3xl:p-[58px] w-[32%]"
                style={{ backgroundImage: "url('images/header.JPG')" }}
              >
                <Text className="font-semibold leading-[normal] mb-[3px] lg:mt-[192px] xl:mt-[220px] 2xl:mt-[248px] 3xl:mt-[297px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[91%]">
                  Development of various types of residential houses at
                  University Satelite Town
                </Text>
              </Column>
              <Column className="bg-cover bg-repeat bg-bluegray_100 font-inter items-end lg:p-[43px] xl:p-[49px] 2xl:p-[56px] 3xl:p-[67px] w-[32%]"
              style={{ backgroundImage: "url('images/bridge1.JPG')" }}>
                <Text className="font-semibold leading-[normal] lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] lg:mt-[166px] xl:mt-[190px] 2xl:mt-[214px] 3xl:mt-[256px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[85%]">
                  Bridge for Infrastructure Construction
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-between 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group35.png')" }}
              >
                <Text className="font-semibold leading-[normal] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:mt-[210px] xl:mt-[241px] 2xl:mt-[271px] 3xl:mt-[325px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[82%]">
                  Construction of 15 Nos Solar Powered Boreholes
                  <br />
                  Katsina State
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[41px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[63px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group37.png')" }}
              >
                <Text className="font-semibold leading-[normal] lg:mt-[174px] xl:mt-[199px] 2xl:mt-[224px] 3xl:mt-[268px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[96%]">
                  Remedial works on Okpulu Road, linking Owo-Asa-Nwaiyekwe,
                  Obiga, Ukwa <br />
                  West LGA
                </Text>
              </Column>
              <Column className="bg-cover bg-repeat items-end bg-bluegray_100 font-inter lg:p-[54px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] w-[32%]" style={{ backgroundImage: "url('images/light1.JPG')" }}>
                <Text className="font-semibold leading-[normal] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[170px] xl:mt-[194px] 2xl:mt-[219px] 3xl:mt-[262px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[80%]">
                  Construction of 50 <br />
                  Nos of Solar Street <br />
                  Lights
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-between 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group39.png')" }}
              >
                <Text className="font-semibold leading-[normal] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mt-[201px] xl:mt-[230px] 2xl:mt-[259px] 3xl:mt-[310px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[94%]">
                  Flood Drain/Channelization & Construction of Asphalted Road on
                  Nneogidi-Ejike Imoka Nwobulalor Uboh Roads, Agulu
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group41.png')" }}
              >
                <Text className="font-semibold leading-[normal] mb-[1px] lg:mt-[186px] xl:mt-[213px] 2xl:mt-[240px] 3xl:mt-[288px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[98%]">
                  Construction of 5KM Surface Dressed Road - Labellen Garin
                  Modibo Garin Majidi Road.{" "}
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] w-[32%]"
                style={{ backgroundImage: "url('images/img_group43.png')" }}
              >
                <Text className="font-semibold leading-[normal] lg:mt-[171px] xl:mt-[195px] 2xl:mt-[220px] 3xl:mt-[264px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[96%]">
                  Rehabilitation and Asphalt Overlay 2KM internal road/
                  construction of Culvert at the University of Agriculture,
                  Makurdi.
                </Text>
              </Column>
            </Row>
            {/* HERE */}
            <Row className="items-center justify-between 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] w-[32%]"
                style={{ backgroundImage: "url('images/bridge2.JPG')" }}
              >
                <Text className="font-semibold leading-[normal] mb-[3px] lg:mt-[192px] xl:mt-[220px] 2xl:mt-[248px] 3xl:mt-[297px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[91%]">
                  Construction of Bridge to facilitate Transportation
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center lg:p-[38px] xl:p-[43px] 2xl:p-[49px] 3xl:p-[58px] w-[32%]"
                style={{ backgroundImage: "url('images/road1.JPG')" }}
              >
                <Text className="font-semibold leading-[normal] mb-[3px] lg:mt-[192px] xl:mt-[220px] 2xl:mt-[248px] 3xl:mt-[297px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[91%]">
                  Construction of Urualla-Amaeshi Road, Akokwa, Nigeria
                </Text>
              </Column>
              <Column className="bg-cover bg-repeat bg-bluegray_100 font-inter items-end lg:p-[43px] xl:p-[49px] 2xl:p-[56px] 3xl:p-[67px] w-[32%]"
              style={{ backgroundImage: "url('images/road3.JPG')" }}>
                <Text className="font-semibold leading-[normal] lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] lg:mt-[166px] xl:mt-[190px] 2xl:mt-[214px] 3xl:mt-[256px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[85%]">
                  Renovation of Nnewi-Okigwe Road, Amaeshi, Nigeria
                </Text>
              </Column>
            </Row>
          </List>
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
          <Stack className="xl:h-[1124px] 2xl:h-[1264px] 3xl:h-[1517px] lg:h-[983px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Stack className="absolute xl:h-[1052px] 2xl:h-[1183px] 3xl:h-[1420px] lg:h-[920px] inset-x-[0] top-[0] w-[100%]">
              <div className="absolute bg-white_A700 bottom-[0] lg:h-[542px] xl:h-[620px] 2xl:h-[697px] 3xl:h-[836px] inset-x-[0] w-[100%]"></div>
              <Column className="absolute bg-white_A700 inset-x-[0] justify-end lg:p-[45px] xl:p-[51px] 2xl:p-[58px] 3xl:p-[69px] top-[0] w-[100%]">
                <Row className="items-center 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] mr-[auto] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[62%]">
                  <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-indigo_900 w-[auto]">
                    Testimonial
                  </Text>
                  <Text className="font-semibold lg:ml-[310px] lg:text-[31px] text-indigo_900 w-[auto]">
                    Some Clients
                  </Text>
                </Row>
                <Row className="items-center 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] 3xl:mr-[104px] lg:mr-[67px] xl:mr-[77px] 2xl:mr-[87px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[86%]">
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
                    <Text className="font-semibold lg:mb-[45px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[70px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">s
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
                        onClick={()=>navigate("/about")}
                      >
                        OUR COMPANY
                      </Text>
                      <Text
                        className="common-pointer font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={()=>navigate("/services")}
                      >
                        OUR SERVICES
                      </Text>
                      <Text
                        className="common-pointer font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]"
                        onClick={()=>navigate("/projects")}
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

export default ProjectsPage;






{/* <Text className="font-semibold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] lg:mr-[410px] xl:mr-[469px] 2xl:mr-[528px] 3xl:mr-[633px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-indigo_900 w-[53%]">
Bringing your ideas <br />
to live with a great <br />
team & experience.
</Text>
<Column className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mr-[600px] xl:mr-[686px] 2xl:mr-[772px] 3xl:mr-[926px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[34%]">
<Text className="font-inter leading-[normal] not-italic lg:text-[15px] text-white w-[100%]">
  We perform a comprehensive variety of services particularly{" "}
  <br />
  focused on engineering research, construction, procurement,{" "}
  <br />
  design, consultancy <br />
  and general contract.{" "}
</Text> */}