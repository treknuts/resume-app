import { Component, Input, OnInit } from '@angular/core';

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  image: string;
  icons: Array<string>;
  wip: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];

  constructor() {
    this.projects = [
      {
        name: 'Robotics Project',
        image: 'assets/robot.png',
        description:
          'A Python program that commands a bot through an obstacle course simulation. The program takes advantage of localization, path-planning, and path-following algorithms to navigate to its target destination.',
        githubUrl: 'https://github.com/treknuts/robotics-project',
        icons: ['https://img.icons8.com/color/48/000000/python.png'],
        wip: false,
      },
      {
        name: 'Audit Error Tracker',
        image: 'assets/capstone.png',
        description:
          'Capstone project for Noridian Healthcare Solutions. My team developed an application that allows managers to upload files and track errors on audits. Users have a plethora of filtering options to view results.',
        githubUrl: 'https://github.com/treknuts/NoridianCapstone',
        icons: [
          'https://img.icons8.com/color/48/000000/python.png',
          'https://img.icons8.com/ios/50/000000/mysql-logo.png',
        ],
        wip: false,
      },
      {
        name: 'Brick Breaker',
        image: 'assets/brickbreaker.png',
        description: 'Remake of the retro arcade game Brick Breaker.',
        githubUrl: 'https://github.com/treknuts/BrickBreaker',
        icons: [
          'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png',
        ],
        wip: false,
      },
      {
        name: 'ChetBot',
        image: 'assets/chet.png',
        description:
          'A Discord chat bot that responds to commands provided in text channels on a server.',
        githubUrl: 'https://github.com/treknuts/chet-bot',
        icons: [
          'https://img.icons8.com/color/48/000000/javascript.png',
          'https://img.icons8.com/color/48/000000/nodejs.png',
        ],
        wip: true,
      },
      {
        name: 'Glucose Diary',
        image: 'assets/glucose.png',
        description:
          'A mobile application that allows users to log, predict, and visualize their blood glucose levels.',
        githubUrl: 'https://github.com/treknuts/glucose-diary',
        icons: [
          'https://img.icons8.com/color/48/000000/flutter.png',
          'https://img.icons8.com/color/48/000000/dart.png',
          'https://img.icons8.com/ios-filled/50/000000/laravel.png',
          'https://img.icons8.com/ios/50/000000/mysql-logo.png',
        ],
        wip: true,
      },
      {
        name: 'Sort Visualizer',
        image: 'assets/sort.gif',
        description:
          'Python program using Matplotlib to visualize common sorting algorithms.',
        githubUrl: 'https://github.com/treknuts/sort-visualizer',
        icons: ['https://img.icons8.com/color/48/000000/python.png'],
        wip: true,
      },
      {
        name: 'TODO App',
        image: 'assets/vue-todo.png',
        description:
          'SPA that allows users to track TODO tasks. Users can organize tasks by priority and progress.',
        githubUrl: 'https://github.com/treknuts/vue-todo',
        icons: [
          'https://img.icons8.com/color/48/000000/vue-js.png',
          'https://img.icons8.com/color/48/000000/javascript.png',
        ],
        wip: false,
      },
    ];
  }

  ngOnInit(): void {}
}
