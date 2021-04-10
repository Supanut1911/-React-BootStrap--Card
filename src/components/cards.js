import React from "react";
import Card from "./card";

import img1 from "../assets/ulogo.png";
import img2 from "../assets/dlogo.png";
import img3 from "../assets/rdlogo.png";

const cards = [
  {
    id: 1,
    title: "ubuntu",
    image: img1,
    url: "https://ubuntu.com/",
    description: " is a Linux distribution based on Debian and composed mostly of free and open-source software. Ubuntu is officially released in three editions: Desktop,Server, and Core for Internet of things devices and robots. All the editions can run on the computer alone, or in a virtual machine. Ubuntu is a popular operating system for cloud computing, with support for OpenStack. Ubuntu's default desktop ..."
  },
  {
    id: 2,
    title: "Debian",
    image: img2,
    url:"https://www.debian.org/",
    description: "also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993. The first version of Debian (0.01) was released on September 15, 1993, and its first stable version (1.1) was released on June 17, 1996.The Debian Stable branch is the most popular edition ... "
    
  },
  {
    id: 3,
    title: "Kali",
    image: img3,
    url:"https://www.kali.org/",
    description: "is that of a destroyer of evil forces. She is the most powerful form of Shakti, and the goddess of one of the four subcategories of the Kulamārga, a category of Tantric Saivism. She destroys the evil in order to protect the innocent. Over time, Kali has been worshipped by devotional movements and tantric sects variously as the Divine Mother, Mother of the Universe, Adi Shakti, or Adi Parashakti ... "

  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {
            cards.map((card) => (
                <div className="col-md-4" key={cards.id}>
                    <Card title={card.title} image={card.image} url={card.url} description={card.description}/>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Cards;
