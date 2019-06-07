import React, { Component } from "react";
import { Card } from "./Components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          key: 1,
          name: "Zion Williamson",
          comp: "Blake Griffin",
          school: "Duke",
          type:
            "https://66.media.tumblr.com/5623406f4923edb1c293254f16c360ac/tumblr_mmi88btyBi1spn836o3_400.png",
          bigPic:
            "https://arizonasports.com/wp-content/uploads/2019/04/GettyImages-1137650729-620x370.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3989.png",
          age: "18",
          height: "6'7",
          weight: "285",
          pos: "PF",
          strDesc:
            "Brute strength, capable of driving the basketball and creating for others, Set shot is not a high release, for someone who is going to draw a lot of contact, he only shot 65% from the line",
          strNum: "40",
          wknDesc:
            "Great on ball defender, known for coming over and erasing shots but can sometime get caught staring at ball and lose his man",
          wknNum: "40",
          pts: 22.6,
          reb: 8.9,
          ast: 2.1,
          summary:
            "Transition freight train with enough skills to create his own shot in the half court, he will change the course of whatever team drafts him."
        },
        {
          key: 2,
          name: "R.J. Barrett",
          comp: "Rudy Gay",
          school: "Duke",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://neulioncs.hs.llnwd.net/pics33/800/OV/OVQEBWMQTVPDPLV.20181203200018.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3005.png",
          age: "18",
          height: "6'7",
          weight: "202",
          pos: "SF",
          strDesc:
            "Known for his shooting but capable of creating for others as well, initiated offense when tyus jones was out, pretty looking shot, capable ball handler ",
          strNum: "50",
          wknDesc:
            "Often found out of position defensively, target for pick and rolls by opposing team, did not show large interest in rebounding",
          wknNum: "10",
          pts: 22.6,
          reb: 7.6,
          ast: 4.3,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 3,
          name: "Ja Morant",
          comp: "John Wall",
          school: "Murray St",
          type:
            "https://ih0.redbubble.net/image.402376779.5395/flat,550x550,075,f.jpg",
          bigPic:
            "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/-cb832785d801af0f913c578637924094.jpg",
          compPic:
            "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4237.png&w=350&h=254",
          age: "19",
          height: "6'3",
          weight: "175",
          pos: "PG",
          strDesc:
            "Lightning quick speed, outstanding athletic ability, known for dunking on opponents but gets just as much enjoyment out of finding the open man",
          strNum: "40",
          wknDesc:
            "Highlights dont just come from Ja's offense, he has many helpside blocks that showcase his leaping ability as well",
          wknNum: "20",
          pts: 24.5,
          reb: 5.7,
          ast: 10.0,
          summary:
            "Ja will be a foundational piece for any team that drafts him, he will be a fixture on sportscenter top 10 for years to come. "
        },
        {
          key: 4,
          name: "Jarrett Culver",
          comp: "Jeremy Lamb",
          school: "Texas Tech",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://nbccollegebasketballtalk.files.wordpress.com/2019/04/gettyimages-1140894996-e1554671586646.jpg?w=610&h=343&crop=1",
          compPic:
            "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6603.png&w=350&h=254",
          age: "20",
          height: "6'6",
          weight: "195",
          pos: "SG",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 18.5,
          reb: 6.4,
          ast: 3.7,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 5,
          name: "DeAndre Hunter",
          comp: "Luol Deng",
          school: "Virgina",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://basketball.realgm.com/images/nba/4.2/wiretap/photos/2006/Hunter_Deandre_ncaa_180830.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2429.png",
          age: "21",
          height: "6'7",
          weight: "225",
          pos: "PF",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 15.2,
          reb: 5.1,
          ast: 2.0,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 6,
          name: "Darius Garland",
          comp: "Jeff Teague",
          school: "Vanderbilt",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/11/23/darius-garland-injury-kent-state.jpg?itok=CRla_H_w",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4015.png",
          age: "19",
          height: "6'2",
          weight: "175",
          pos: "PG",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.2,
          reb: 3.8,
          ast: 2.6,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 7,
          name: "Cam Reddish",
          comp: "Ben McLemore",
          school: "Duke",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2019/04/01/cam-reddish-declares-nba-draft.jpg?itok=FHU3ufX_",
          compPic:
            "https://a.espncdn.com/i/headshots/nba/players/full/2578213.png",
          age: "19",
          height: "6'8",
          weight: "218",
          pos: "SF",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 13.5,
          reb: 3.7,
          ast: 1.9,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 8,
          name: "S. Doumbouya",
          comp: "Trevor Booker",
          school: "France",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "http://content.draftexpress.com/upload/player/large/SekouDoumbouya.jpeg",
          compPic:
            "https://a.espncdn.com/i/headshots/nba/players/full/4270.png",
          age: "18",
          height: "6'9",
          weight: "230",
          pos: "PF",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 6.7,
          reb: 3.0,
          ast: 0.7,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 9,
          name: "Goga Bitadze",
          comp: "Enes Kanter",
          school: "Georgia",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://www.thestepien.com/wp-content/uploads/2019/01/DwKU0VRX4AMXNTP.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 12.1,
          reb: 6.4,
          ast: 1.2,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 10,
          name: "Brandon Clarke",
          comp: "Enes Kanter",
          school: "Gonzaga",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://cdn.theathletic.com/app/uploads/2018/10/25193434/AR3H7889-e1540585032655-1024x685.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.9,
          reb: 8.6,
          ast: 1.9,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 11,
          name: "Nassir Little",
          comp: " ",
          school: "UNC",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://uproxx.files.wordpress.com/2019/01/nassir-little.jpg?quality=100&w=650",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 9.8,
          reb: 4.6,
          ast: 0.6,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 12,
          name: "Grant Williams",
          comp: " ",
          school: "Tennessee",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://www.thestepien.com/wp-content/uploads/2018/12/GrantWilliams1.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 18.8,
          reb: 7.5,
          ast: 3.2,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 13,
          name: "Jaxson Hayes",
          comp: " ",
          school: "Texas",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://www.ncaa.com/sites/default/files/public/images/2018-12-14/Jaxson%20Hayes.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 10.0,
          reb: 5.0,
          ast: 0.3,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 14,
          name: "Bol Bol",
          comp: " ",
          school: "Oregon",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://cdn-s3.si.com/styles/marquee_large_2x/s3/images/bol-bol-manute-son-basketball-recruiting.jpg?itok=1Wdyg-vZ",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 21.0,
          reb: 9.6,
          ast: 1.0,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 15,
          name: "Romeo Langford",
          comp: " ",
          school: "Indiana",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://s3media.247sports.com/Uploads/Assets/155/104/9104155.jpg?fit=bounds&crop=620:320,offset-y0.50&width=620&height=320",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.5,
          reb: 5.4,
          ast: 2.3,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 16,
          name: "Coby White",
          comp: " ",
          school: "UNC",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "http://carolinablitz.com/wp-content/uploads/2019/02/Coby-White.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.1,
          reb: 3.5,
          ast: 4.1,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 17,
          name: "P.J. Washington",
          comp: " ",
          school: "Kentucky",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "http://www1.pictures.zimbio.com/gi/PJ+Washington+Virgina+Tech+v+Kentucky+ECYLoZoDnzDl.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 15.2,
          reb: 7.6,
          ast: 1.8,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 18,
          name: "Jontay Porter",
          comp: " ",
          school: "Missouri",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://ballershoesdb.com/wp-content/uploads/2018/11/Jontay-Porter-500x667.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 0,
          reb: 0,
          ast: 0,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 19,
          name: "Rui Hachimura",
          comp: " ",
          school: "Gonzaga",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://ballershoesdb.com/wp-content/uploads/2018/11/Rui-Hachimura-500x667.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 19.7,
          reb: 6.5,
          ast: 1.5,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 20,
          name: "Nickeil A-Walker",
          comp: " ",
          school: "VT",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://i.cbc.ca/1.5060177.1554763079!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/alexander-walker-nickeil-031719.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.2,
          reb: 4.1,
          ast: 4.0,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 21,
          name: "Tyler Hero",
          comp: " ",
          school: "Kentucky",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "http://www.gobigbluecountry.com/wp-content/uploads/2019/02/herro-1-800x645.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 14.0,
          reb: 4.5,
          ast: 2.5,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 22,
          name: "Kevin Porter Jr.",
          comp: " ",
          school: "USC",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "http://dailytrojan.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-19-at-11.56.23-PM.png",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 9.5,
          reb: 4.0,
          ast: 1.4,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 23,
          name: "Talen H-Tucker",
          comp: " ",
          school: "Iowa St",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://d1tjohjvimcqgl.cloudfront.net/website/articles/23278_a11.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 11.8,
          reb: 4.9,
          ast: 2.3,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 24,
          name: "Matisse Thybulle",
          comp: " ",
          school: "Washington",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://kpug1170.com/wp-content/blogs.dir/72/files/2018/01/thybulle_edited.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 9.1,
          reb: 3.1,
          ast: 2.1,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 25,
          name: "Keldon Johnson",
          comp: " ",
          school: "Kentucky",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkZPyojUW1AbsSQtxxiZx7Sq53oYtZE48LjKFwjyKLtqhKCmOZQ",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 13.5,
          reb: 5.9,
          ast: 1.6,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 26,
          name: "Ty Jerome",
          comp: " ",
          school: "Virginia",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://usatthebiglead.files.wordpress.com/2019/04/gettyimages-1139379377.jpg?w=1000&h=600&crop=1?w=1000&crop=0",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 13.6,
          reb: 4.2,
          ast: 5.5,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 27,
          name: "KZ Okpala",
          comp: " ",
          school: "Stanford",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://gostanford.com/images/2018/10/30/KZ_Okpala_CV_020318_141.JPG",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.9,
          reb: 5.7,
          ast: 2.0,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 28,
          name: "Bruno Fernando",
          comp: " ",
          school: "Maryland",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://wtop.com/wp-content/uploads/2019/02/Ohio_St_Maryland_Basketball_14368-780x520.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 13.6,
          reb: 10.6,
          ast: 2.0,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 29,
          name: "Cam Johnson",
          comp: " ",
          school: "UNC",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/cam0211-1532141562.jpg",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.9,
          reb: 5.8,
          ast: 2.4,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        },
        {
          key: 30,
          name: "Daniel Gafford",
          comp: " ",
          school: "Arkansas",
          type:
            "https://ih0.redbubble.net/image.402374338.5329/flat,550x550,075,f.jpg",
          bigPic:
            "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2019/03/18/danial-gafford-declares-nba-draft.jpg?itok=mHZkQRUL",
          compPic:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6447.png",
          age: "19",
          height: "6'11",
          weight: "250",
          pos: "C",
          strDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          strNum: "30",
          wknDesc:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense.",
          wknNum: "30",
          pts: 16.9,
          reb: 8.7,
          ast: 0.7,
          summary:
            "Capable of running pick-and-roll as a ball handler; the team that drafts him can use him in virtually any role on offense."
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Container id="mainContain">
          <Row className="mainTitle">
            <img
              src="https://fontmeme.com/permalink/190427/c7bbbb0160b5f4d3d307c9cb8687dfb2.png"
              alt="pokemon-font"
              border="0"
            />
          </Row>
          <Row id="mainRow">
            {this.state.players.map(player => {
              return (
                <Card
                  name={player.name}
                  comp={player.comp}
                  school={player.school}
                  type={player.type}
                  bigPic={player.bigPic}
                  compPic={player.compPic}
                  age={player.age}
                  height={player.height}
                  weight={player.weight}
                  pos={player.pos}
                  strDesc={player.strDesc}
                  strNum={player.strNum}
                  wknDesc={player.wknDesc}
                  wknNum={player.wknNum}
                  pts={player.pts}
                  reb={player.reb}
                  ast={player.ast}
                  summary={player.summary}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
