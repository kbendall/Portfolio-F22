import {
  Grid,
  SimpleGrid,
  GridItem,
  Highlight,
  Divider,
  Box,
} from "@chakra-ui/react";

export const PopoverProjectsContent = () => {
  return (
    <>
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
        extension.
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
      <SimpleGrid columns="10">
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
      </SimpleGrid>
      <br />
      <Divider />
      <br />
      <span style={{ fontWeight: "bold" }}>Mechanical/Electrical</span>
      <br />
      <br />
      <SimpleGrid columns="8">
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
      <div>
        **Note: VHDL and Verilog are currently being taught as a part of the
        course MTE262: Microprocessors and Digital Logic, to be finished in
        March
      </div>
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
        My name is Kate Bendall and I am currently a 2A mechatronics engineering
        student at the University of Waterloo. I am striving to build my
        technical skills through personal projects, job experience and in-class
        teachings, but I promise you there's more to me than just my on-paper
        qualifications...
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
        of All Trades".
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
        passions is planning and managing events. This lead me to participate in
        a variety of Engineering Society events and other campus wide
        initiatives. Currently I am the Outreach Comissioner for the Engineering
        Society, where I plan engineering wide events and support my team of
        directors who are also planning outreach centered events on and off
        campus. I've also held the Education Outreach Directorship, EngSoc class
        representative position and have been an Engineering Ambassador,
        participating in EngChats and other recruitment efforts like goENG girl,
        an event dedicated to sparking an engineering passion in teen girls.
        Last fall, I also had a great time as an orientation leader. I led team
        'Rock The Croc' through a rigorous first week of class, complete with
        crazy activities and enough purple to paint the City of Waterloo.
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
