import {
  Flex,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "components/ui/motion";
import Header from "components/layout/header";
import Projects from "./projects";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

interface HomeProps {
  projects: project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            src={"assets/images/user_icon.jpg"}
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0} style={{fontSize:18}}>
            Welcome!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left" style={{fontSize:18}}>
            I am{" "}
            <Box as="strong" fontWeight="600" style={{fontSize:18}}>
              Ercan Ünal,
            </Box >{" "}
             a{" "}
            <Box as="span" whiteSpace="nowrap" style={{fontSize:18}}>
              Software Developer
            </Box>{" "}
            <Box style={{fontSize:14}}>
             with a demonstrated history of working in the information technology and services industry. Skilled in ReactJS and React Native, NodeJS with Express, MongoDB. A strong IT specialist with a BS in Computer Education and Instructional Technology from the Middle East Technical University.
            </Box>
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
