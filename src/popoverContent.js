import {
  Grid,
  SimpleGrid,
  GridItem,
  Highlight,
  Divider,
  Box,
} from "@chakra-ui/react";
import flow2 from "./Videos/flow2.MOV";

export const PopoverProjectsContent = () => {
  return (
    <>
      <span style={{ fontWeight: "bold" }}>Flow Meter Comparison Jig</span>
      <div>
        Working at Brickeye as a hardware developer, one of my projects was this
        jig. More specfiically, my task was to create a system that was able to
        host multiple ultrasonic flow meters on multiple pipelines with a
        "control" in-line flow meter on each, manually calibrated to the correct
        rate. Ideally the pipes would be able to be swapped to simulate
        different conditions (comparing things like copper versus PVC and
        tubulent versus laminar flow). I designed the jig using AutoCAD and
        built the first prototype with an Arduino, pulse counters, float switch,
        and other sensor inputs taking into consideration the many challenges of
        using ultrasonic flow meters which have very specific
        upstream/downstream requirements. The completed project was organized
        into an electrical box that I outfitted with the appropriate connectors
        and can run autonomously without running the pump dry or interrupting
        the pipelines laminar flow.
      </div>
      <br />
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem colStart={2} colEnd={4}>
          <img
            width="100%"
            src="\icons\flow.jpg"
            alt="Inside of electrical flow box"
          />
        </GridItem>
        <GridItem colStart={5} colEnd={7}>
          <video src={flow2} width="800" height="400" controls />
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>
        BuddyBackdrops Chrome Extension
      </span>
      <div>
        This Chrome Extension was inspired by the "Locket" iOS widget. It
        enables users to share common Chrome backgrounds with their groups.
        Groups are user created and password protected. It makes use of a Python
        and flask virtual environment. My contribution was front-end based,
        coded in Javascript, HTML and CSS. My largest additions were the search
        bar logic, clock logic and the Git logo. I also practiced project
        management as I connected with my teammates in order to complete the
        extension. Our extension was approved for the Google Chrome store as of
        July 2023.
      </div>
      <br />
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colStart={2} colEnd={5}>
          <img
            width="100%"
            src="\icons\buddyBackdrops.jpg"
            alt="Welcome screen for Buddy Backdrops Chrome Extension"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>Rulerless Measurement Device</span>
      <div>
        The heart of this project is the combination of an ultrasonic sensor and
        a stepper motor. Using an Arduino and related accessories (LCD screen,
        joystick, etc.), my team and I created a device to measure small
        objects. The goal of this project was to be able to measure lego blocks
        and other small objects without using a ruler or conventional
        measurement device. To avoid using these we started a stepper motor with
        an ultrasonic sensor attached to the motor shaft and detected whether an
        object was present and as well as the number of steps it was present
        for. We then converted the step count into a length using the
        relationship between steps and distance. This project was completed in
        coordination with MTE201: Experimental Measurement and Statistical
        Analysis.
      </div>
      <br />
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem colStart={2} colEnd={4}>
          <img
            width="100%"
            src="\icons\measurement1.jpg"
            alt="Prototype Design Drawing"
          />
        </GridItem>
        <GridItem colStart={5} colEnd={7}>
          <img
            width="100%"
            src="\icons\measurement2.jpg"
            alt="Final Design Setup"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>Balsa Wood Bridge</span>
      <div>
        This project was complete for MTE219: Mechanics of Deformable Solids
        where myself and a group designed a bridge with the goal of having the
        best supported weight to bridge weight ratio. We were limited by the
        project specifications, the biggest of which was that the bridge had to
        be made from laser cut balsa wood and plywood dowels. Our final design
        took into the consideration the mechanics of deformable solids and our
        calculated modes of failure for the structure. We optimized our truss
        patterns and then our member designs as well taking specific care to
        identify which would be under tension and compression. Our structure
        brokw after holding 10kg of weight, meaning it held 396.83 times its own
        weight!
      </div>
      <br />
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colStart={2} colEnd={4}>
          <img
            width="100%"
            src="\icons\bridge.jpg"
            alt="Myself adding a weight to the middle dowel of the bridge"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>Mario Kart Lego EV3 Robot</span>
      <div>
        My groupmates and I modified an existing Lego EV3 robot to interact with
        a physical Mario Kart inspired course. The robot not only has the
        addition of a plastic ball shooter but also a taller set of wheels and a
        pointed front bumper capable of directing obstacles out of the given
        path. Using RobotC I coded several functions triggered by the sensors
        outfitted on the robot. For example, when the robot encounters a green
        strip, representing grass, it reduces its speed and turns back onto the
        main track. When it encounters a rainbow strip, it increases speed until
        three seconds have passed or the front bumper removes an obstacle from
        the path.
      </div>
      <br />
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colStart={2}>
          <img
            src="\icons\marioBot.jpg"
            alt="Myself and two group mates with our modified robot"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>WonderWoman Discord Bot</span>
      <div>
        This project was inspired by the age-old question: what are barriers for
        women, or gender minorities, in STEM? My team and I addressed this issue
        by tackling an issue that we have faced before in order to create a
        solution to a problem that many people face. Introducing WonderWoman,
        the discord bot programmed to be a balance of empowerment for gender
        minorities and a punsiher for those who combat inclusivity with
        gender-based harrassment. The bot, developed in Python using the
        discord.py library/api wrapper, has three main components: flagging
        sexist comments/terms, sending empowering quotations, and challenging
        with users through a trivia game. My contribution was the prototype for
        flagging sexist comments/terms as well as acting as project manager
        througout the hackathon in which the project was completed.
      </div>
      <br />
      <SimpleGrid columns="2" gap={2}>
        <img
          width="100%"
          src="\icons\wwBot(1).jpg"
          alt="Demo of quiz and quote functions for WonderWoman Discord bot"
        />
        <img
          width="100%"
          src="\icons\wwBot(2).jpg"
          alt="Demo of comment flagging for WonderWoman Discord bot"
        />
      </SimpleGrid>
      <br />
      <br />
      <br />
    </>
  );
};

export const PopoverSkillsContent = () => {
  return (
    <>
      <span style={{ fontWeight: "bold" }}>Software</span>
      <br />
      <br />
      <SimpleGrid columns="5" spacingY="7">
        <Box>
          <Highlight
            query="Javascript"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Javascript
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="CSS"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            CSS
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="HTML"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            HTML
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="C++"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            C++
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="React"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            React
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Git"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Git
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Jira"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Jira
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Python"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Python
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="OpenCV"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            OpenCV
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Agile/Scrum"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Agile/Scrum
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Jest"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Jest
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Jenkins"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Jenkins
          </Highlight>
        </Box>
      </SimpleGrid>
      <br />
      <Divider />
      <br />
      <span style={{ fontWeight: "bold" }}>Mechanical/Electrical</span>
      <br />
      <br />
      <SimpleGrid columns="3" spacingY="7">
        <Box>
          <Highlight
            query="SolidWorks"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            SolidWorks
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="AutoCAD"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            AutoCAD
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Rapid Prototyping"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Rapid Prototyping
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="GD&T"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            GD&T
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Arduino Prototyping"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Arduino Prototyping
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Soldering - Through Hole"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Soldering - Through Hole
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Soldering - Surface Mount"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Soldering - Surface Mount
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="VHDL"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            VHDL
          </Highlight>
        </Box>
        <Box>
          <Highlight
            query="Verilog"
            styles={{ px: "2", py: "1", rounded: "full", bg: "gray.200" }}
          >
            Verilog
          </Highlight>
        </Box>
      </SimpleGrid>
      <br />
      <br />
    </>
  );
};

export const PopoverAboutMeContent = () => {
  return (
    <>
      <span style={{ fontWeight: "bold" }}>Hi there!</span>
      <br />
      <br />
      <div>
        My name is Kate Bendall and I am a 2B Honours Mechatronics Engineering
        student at the University of Waterloo. I am striving to build my
        technical skills through personal projects, job experience and in-class
        teachings, but I promise you there's more to learn about me than just my
        technical qualifications...
      </div>
      <br />
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colStart={2}>
          <img
            src="\icons\engSocLights.jpg"
            alt="Myself leaning on the Engineering Society donated light display at Waterloo Park Wonders of Winter"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <div>
        Growing up I spent most of my time playing sports. I tried every
        position on my ice hockey team before I found my fit at goalie. I played
        lacrosse all throughout my childhood as well but trying goalie there
        didn't go as well, instead I spent my time racing through games as a
        midfielder. In highschool I picked up field hockey and supported my team
        through rain or shine. In short, I've tried a ton of sports, whether
        it's rowing and rockclimbing to volleyball, tennis, or golf, it's safe
        to say I was destined to choose a university program nicknamed the "Jack
        of All Trades". These days I stay active with runs around Waterloo Park
        and the Huron Nature Area, volleyball intramurals and kick boxing
        classes.
      </div>
      <br />
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colStart={2}>
          <img
            src="\icons\hockeyTeam.jpg"
            alt="Girls hockey team championship on ice"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <div>
        While on school terms I spend most of my time in class but still I am
        determined to find time for my other passions. Like sports, one of those
        passions is planning, managing and volunteering in outreach events. This
        lead me to participate in a variety of Engineering Society positions and
        other campus wide initiatives. I am in my second term as the Outreach
        Comissioner for the Society, where I plan engineering wide events and
        manage my team of directors who are also planning outreach and
        fundraising style events on and off campus. I've also held the Education
        Outreach Directorship, EngSoc class representative position and have
        been an Engineering Ambassador, working in EngChats and other
        recruitment efforts like goENG girl, an event dedicated to sparking an
        engineering passion in tween girls. Additionally, each year I
        participate as an Orientation Week Leader! Leading my colour teams
        through a rigorous first week of class, competing with crazy activities
        and practically painting the city purple have all been my resonsibility
        as a leader... keeping us organized and on time as well as responding to
        emergency situations with tact and practicing a constant appreciation
        for EDI are the cherries on top. My work through TEDxUW has been highly
        focused in speaker recuitment and team management. In the 2022
        conference, I held the role of Speaker Relations Associate and
        emcee/host where I was able to communicate with a variety of excpetional
        individuals all eager to bring their 'ideas worth sharing' to our stage.
        This year I was promoted to Speaker Relations Director where I manage
        the team I used to be a part of. We have a top of the line speaking
        group this year and we are deep in planning for our October 1st
        conference date.
      </div>
      <br />
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colStart={2}>
          <img
            src="\icons\engSocPin.jpg"
            alt="A custom UW and KPL pin is held in front of the KPL main branch"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <div>
        I'm looking forward to continuing to make my way through class, co-op
        and the other parts of my life that aren't spent on campus. If there's
        anything else you would like to know my job qualifications, goals for
        the future or if you're just looking to chat, you can reach me at
        kbendall@uwaterloo.ca or through LinkedIn. Thanks!
      </div>
      <br />
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colStart={2}>
          <img
            src="\icons\lectureHall.jpg"
            alt="Myself sitting in an empty lecture hall with school work spread on the desk"
          />
        </GridItem>
      </Grid>
    </>
  );
};
