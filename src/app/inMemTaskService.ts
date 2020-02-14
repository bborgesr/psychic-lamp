import { InMemoryDbService } from "angular-in-memory-web-api";
import { ITask as Task } from "./models/task";

export class InMemTaskService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {
        id: 1,
        name: "HTML I",
        done: true,
        description:
          "HTML5 is one of the hot web technologies and is widely gaining acceptance across mobile and web. In our course you get a complete resource which can get you started on application development for HTML5. In our course you work on actual examples and go through important concepts required for through knowledge. In our course you will start with basic HTML tags. You will learn how to create HTML websites and use CSS in your work before we start discussing HTML5. We do not assume any prior knowledge so we go through the concepts from the beginner's point of view."
      },
      {
        id: 2,
        name: "CSS",
        done: false,
        description:
          "CSS - short for Cascading Style Sheets - is a 'programming language' you use to turn your raw HTML pages into real beautiful websites. This course covers it all - we start at the very basics (What is CSS? How does it work? How do you use it)? and gradually dive in deeper and deeper. And we do this by showing both practical examples as well as the theory behind it."
      },
      {
        id: 3,
        name: "Responsive design",
        done: false,
        description:
          "Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries. As the user switches from their laptop to iPad, the website should automatically switch to accommodate for resolution, image size and scripting abilities. One may also have to consider the settings on their devices; if they have a VPN for iOS on their iPad, for example, the website should not block the user’s access to the page. In other words, the website should have the technology to automatically respond to the user’s preferences. This would eliminate the need for a different design and development phase for each new gadget on the market."
      },
      {
        id: 4,
        name: "Git",
        done: true,
        description:
          "If you create websites, web applications or mobile apps, or in general, if you write any type of code, then, it's always good to use a version control system. This course will teach about one of the most popular and widely used version control systems today. Nowadays any of the professional developer or designer needs to know how to work with Git and GitHub. Git allows you to record different versions of your project and lets you go back in time and check previous states of the project. As for the GitHub, it's an online service where you can share your code to the world and also it allows us to collaborate with different developers. so you if you want to learn those things then this is the right course for you."
      },
      {
        id: 5,
        name: "JavaScript I",
        done: true,
        description:
          "This course is a step by step guide that will take your hand and guide you through the absolute basics and show you everything you need to learn in order to get started with JavaScript. I've put a lot of effort into this course to make sure that the videos are recorded in high quality, the audio is clear, and the lessons are engaging and informative. "
      },
      {
        id: 6,
        name: "JavaScript II",
        done: false,
        description:
          "In only seven hours you will learn enough JavaScript to transform from a junior javascript developer into a senior javascript guru. You will dramatically improve your chances of getting past a technical interview, landing that dream job and earning more money. If you are like me you learnt Javascript by just muddling along, seeing what works and learning a thing or two every day. However, without a grasp of the deeper fundamentals, you will hit quite a few head scratchy issues, introduce bugs, find it hard to read and understand framework and library code and won’t be considered a senior developer."
      }
    ];

    const task: Task[] = [
      {
        id: 1,
        name: "HTML I",
        done: true,
        description:
          "HTML5 is one of the hot web technologies and is widely gaining acceptance across mobile and web. In our course you get a complete resource which can get you started on application development for HTML5. In our course you work on actual examples and go through important concepts required for through knowledge. In our course you will start with basic HTML tags. You will learn how to create HTML websites and use CSS in your work before we start discussing HTML5. We do not assume any prior knowledge so we go through the concepts from the beginner's point of view."
      },
      {
        id: 2,
        name: "CSS",
        done: false,
        description:
          "CSS - short for Cascading Style Sheets - is a 'programming language' you use to turn your raw HTML pages into real beautiful websites. This course covers it all - we start at the very basics (What is CSS? How does it work? How do you use it)? and gradually dive in deeper and deeper. And we do this by showing both practical examples as well as the theory behind it."
      },
      {
        id: 3,
        name: "Responsive design",
        done: false,
        description:
          "Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries. As the user switches from their laptop to iPad, the website should automatically switch to accommodate for resolution, image size and scripting abilities. One may also have to consider the settings on their devices; if they have a VPN for iOS on their iPad, for example, the website should not block the user’s access to the page. In other words, the website should have the technology to automatically respond to the user’s preferences. This would eliminate the need for a different design and development phase for each new gadget on the market."
      },
      {
        id: 4,
        name: "Git",
        done: true,
        description:
          "If you create websites, web applications or mobile apps, or in general, if you write any type of code, then, it's always good to use a version control system. This course will teach about one of the most popular and widely used version control systems today. Nowadays any of the professional developer or designer needs to know how to work with Git and GitHub. Git allows you to record different versions of your project and lets you go back in time and check previous states of the project. As for the GitHub, it's an online service where you can share your code to the world and also it allows us to collaborate with different developers. so you if you want to learn those things then this is the right course for you."
      },
      {
        id: 5,
        name: "JavaScript I",
        done: true,
        description:
          "This course is a step by step guide that will take your hand and guide you through the absolute basics and show you everything you need to learn in order to get started with JavaScript. I've put a lot of effort into this course to make sure that the videos are recorded in high quality, the audio is clear, and the lessons are engaging and informative. "
      },
      {
        id: 6,
        name: "JavaScript II",
        done: false,
        description:
          "In only seven hours you will learn enough JavaScript to transform from a junior javascript developer into a senior javascript guru. You will dramatically improve your chances of getting past a technical interview, landing that dream job and earning more money. If you are like me you learnt Javascript by just muddling along, seeing what works and learning a thing or two every day. However, without a grasp of the deeper fundamentals, you will hit quite a few head scratchy issues, introduce bugs, find it hard to read and understand framework and library code and won’t be considered a senior developer."
      }
    ];

    return { tasks, task };
  }
}
