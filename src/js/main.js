import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import todoApp from './reducers/reducers'
import SolutionList from './components/solution_list';
import Solution from './components/solution';
import Stack from './components/stack';
import NewSolution from './components/new_solution';
import NewStack from './components/new_stack';
import NewExamProfile from './components/new_exam_profile';
import ProjectList from './components/project_list';
import Project from './components/project';
let store = createStore(todoApp);

require("bootstrap-webpack");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("main")
);

ReactDOM.render(
    <SolutionList solutions={[
      {
        name: 'solution one',
        description: 'solution description'
      },
      {
        name: 'solution two',
        description: 'solution description 2'
      }
    ]} goToCreateNewSolution={() => console.log("go to new solution view")}/>,
    document.getElementById("main")
);

ReactDOM.render(
    <Solution solution={
      {
        name: "solution one",
        description: "a new solution description",
        stacks: [
          { name: "stack one", backing_services: ["mysql", "jersey"]},
          { name: "stack two", backing_services: ["rails", "mongodb"]}
        ]
      }
    } tabState="STACKS" onTabChange={(state) => console.log("click new tab " + state)}
              goToCreateNewStack={() => console.log("go to new stack view")}/>,
    document.getElementById("main")
);

ReactDOM.render(
    <Stack stack={
      {
        name: "stack one",
        backing_services: ['mysql', 'jersey'],
        exam_profiles: [
          { name: "exam one", raml: "http://www.example.com", archetype: "http://www.example.com"},
          { name: "exam two", raml: "http://www.example.com", archetype: "http://www.example.com"}
        ]
      }
    } goToCreateExamProfile={() => console.log("go to new exam profile view")}/>,
    document.getElementById("main")
);

ReactDOM.render(
    <NewSolution />,
    document.getElementById("main")
);

ReactDOM.render(
    <NewStack />,
    document.getElementById("main")
);

ReactDOM.render(
    <NewExamProfile />,
    document.getElementById("main")
);

ReactDOM.render(
    <ProjectList projects={[
      {
        name: 'solution one',
        description: 'solution description'
      },
      {
        name: 'solution two',
        description: 'solution description 2'
      }
    ]} goToCreateNewProject={() => console.log("go to new project view")}/>,
    document.getElementById("main")
);

var project = {
  id: "1",
  uri: "/projects/1",
  name: "vodafone",
  description: "asdf",
  new_solution: true,
  solutions: [
    {
      id: "1",
      uri: "/projects/1/solutions/1",
      profile_uri: "/solutions/1",
      name: "backend",
      stack: {
        profile_uri: "/solutions/1/stacks/1",
        name: "springboot"
      },
      mode: "EDIT"
    },
    {
      id: "2",
      uri: "/projects/1/solutions/2",
      profile_uri: "/solutions/2",
      name: "mobile",
      stack: {
        profile_uri: "/solutions/2/stacks/1",
        name: "android"
      }
    }
  ]
};

ReactDOM.render(
    <Project {...project} />,
    document.getElementById("main")
);