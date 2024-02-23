/** @format */
import "./developerCard.css";

function Avatar(props) {
  return (
    <div className='avatar'>
      <img src={props.img} alt='this is an developer image' />
    </div>
  );
}

function Data(props) {
  return (
    <div className='data'>
      <h1>{props.name}</h1>
      <p>{props.disc}</p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.skill.color }}>
      {props.skill.name}
    </div>
  );
}

function DeveloperCard() {
  const skills = [
    {
      name: "html+css",
      color: "blue",
    },
    {
      name: "JavaScript",
      color: "yellow",
    },
    {
      name: "web Design",
      color: "red",
    },
    {
      name: "git & github",
      color: "skyblue",
    },
  ];
  return (
    <>
      <div className='card'>
        <Avatar img='pizzas/focaccia.jpg' />
        <Data
          name='adarsh singh'
          disc='A full stack web devloper learning most advance react from a react course from the worlds best teacher named jost 😘😘'
        />

        <div className='skill-list data'>
          <Skill skill={skills[0]} />
          <Skill skill={skills[1]} />
          <Skill skill={skills[2]} />
          <Skill skill={skills[3]} />
        </div>
      </div>
    </>
  );
}

export default DeveloperCard;
