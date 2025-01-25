import React from 'react';
import './Style.css';

const Tasks = () => {
  const tasks = [
    {
      id: "task1",
      title: "Reduce Paper Cup Usage",
      description: "Limit the usage of paper cups by opting for reusable mugs or containers. This will help reduce waste."
    },
    {
      id: "task2",
      title: "Proper Recycling",
      description: "Ensure paper cups are disposed of in proper recycling bins. Paper cups with plastic lining can't be recycled easily."
    },
    {
      id: "task3",
      title: "Opt for Compostable Alternatives",
      description: "Choose compostable or biodegradable cups, which decompose naturally, reducing the environmental footprint."
    },
    {
      id: "task4",
      title: "Encourage Businesses to Go Green",
      description: "Support businesses that offer eco-friendly alternatives and reduce the use of paper cups in their services."
    },
    {
      id: "task5",
      title: "Educate the Public",
      description: "Raise awareness about the environmental impact of paper cups and educate people on sustainable alternatives."
    },
  ];

  return (
    <div className="tasks-container">
      <h1>5 Major Tasks to Reduce Paper Cup Impact</h1>
      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} id={task.id} className="task-item">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <p id='text20'>Your Progress.....</p>
      <div className="progress1"></div>
    </div>

  );
};

export default Tasks;
