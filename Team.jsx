import React, { useState } from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Krithika Devadiga",
    role: "User Interface",
    description: "Creating visually appealing, intuitive, and user-friendly digital interfaces to enhance user experience.",
    img: "https://img.freepik.com/premium-photo/anime-girl-with-long-hair-blue-eyes-black-cloak-generative-ai_902639-94477.jpg",
  },
  {
    name: "Aakash Sharma",
    role: "Wellness Coach",
    description: "Guiding a balanced lifestyle through Ayurveda.",
    img: "https://thumbs.dreamstime.com/b/anime-businessman-working-office-anime-boy-suit-tie-elegant-anime-man-suit-anime-character-japanese-cartoon-284526176.jpg",
  },
  {
    name: "Rajesh Pandit",
    role: "Herbal Consultant",
    description: "Specialist in herbal medicines and treatments.",
    img: "https://thumbs.dreamstime.com/b/anime-businessman-working-office-anime-boy-suit-tie-elegant-anime-man-suit-anime-character-japanese-cartoon-284526190.jpg",
  },
  {
    name: "Harleen kaur Sehra",
    role: "Nutritionist",
    description: "Focused on diet and Ayurvedic nutrition.",
    img: "https://th.bing.com/th/id/OIP.Uy0VWCBR7cP2qzDbBcKbqwAAAA?rs=1&pid=ImgDetMain",
  },
];

const Team = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="team" className="team-container">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="grid-container">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ backgroundImage: `url(${member.img})` }}></div>
              <div className="flip-card-back">
                <h2 className="name">{member.name}</h2>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
                {/* <button className="close-btn" onClick={() => handleFlip(index)}>Go Back</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
