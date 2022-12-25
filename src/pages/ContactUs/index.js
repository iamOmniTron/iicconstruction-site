import Modal from "../../components/Modal";
import React,{useState} from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Line } from "../../components";

const ContactUsPage = () => {
  const [showModal,setShowModal] = useState(false);
  const hideModal = ()=> setShowModal(false);
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/");
  }
  function handleNavigate16() {
    navigate("/about");
  }
  function handleNavigate17() {
    navigate("/services");
  }
  function handleNavigate18() {
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
            onClick={handleNavigate15}
          >
            Home
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate16}
          >
            About
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate17}
          >
            Services
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
            onClick={handleNavigate18}
          >
            Projects
          </Text>
          <Button className="font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[20%]">
            Contact us
          </Button>
        </Row>
        <Column className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
          <Column
            className="bg-cover bg-repeat justify-end lg:p-[64px] xl:p-[73px] 2xl:p-[83px] 3xl:p-[99px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group20.png')" }}
          >
            <Text className="font-semibold lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[58px] xl:text-[66px] 2xl:text-[75px] 3xl:text-[90px] text-indigo_900 w-[auto]">
              <span className="text-indigo_900 font-ibmplexsans">
                Have a project?
                <br />
              </span>
              <span className="text-black_900 font-ibmplexsans font-thin">
                <br />
              </span>
            </Text>
            <Text className="font-thin lg:leading-[46px] xl:leading-[53px] 2xl:leading-[60px] 3xl:leading-[72px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[42px] xl:text-[48px] 2xl:text-[55px] 3xl:text-[66px] text-black_900 w-[35%]">
              We have seasoned <br />
              professionals to <br />
              handle your <br />
              projects
            </Text>
            <Button className="font-normal lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]" onClick={()=>setShowModal(true)}>
              Get in touch
            </Button>
          </Column>
          <Row className="bg-indigo_900 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] 3xl:p-[103px] lg:p-[66px] xl:p-[76px] 2xl:p-[86px] w-[100%]">
            <Column className="lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] mt-[1px] w-[22%]">
              <Img
                src="images/img_clock.svg"
                className="lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:w-[58px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                alt="clock"
              />
              <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                IIC Construtions Limited
              </Text>
              <Text className="font-light leading-[normal] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[58%]">
                committed to total <br />
                service delivery.{" "}
              </Text>
            </Column>
            <Text className="font-semibold leading-[normal] lg:mb-[40px] xl:mb-[46px] 2xl:mb-[52px] 3xl:mb-[62px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[24%]">
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
            <Column className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] mt-[1px] w-[40%]">
              <Row className="items-center justify-between ml-[3px] w-[96%]">
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  OUR COMPANY
                </Text>
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  OUR SERVICES
                </Text>
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
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
          <Line className="bg-white_A700 h-[1px] w-[100%]" />
        </Column>
      </Column>


      {/* Contact Modal */}

    {
      showModal && <Modal dismiss={hideModal}/>
    }
    </>
  );
};

export default ContactUsPage;
