import Mock from "../mock";

const database = {
  information: {
    name: 'Arnav Gupta',
    aboutContent: "Check out my website to find out more about the services I offer and what I do!",
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=100013690216223',
      linkedin: 'https://www.linkedin.com/in/arnavgup1/',
      instagram: 'https://www.instagram.com/arnav.gupta1/',
      github: 'https://github.com/arnav1gup'
    },
    brandImage: '/images/test1.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/resume.pdf'
  },

  services: [
    {
      title: "iOS App Development",
      icons: {
        icon1: "swift",
        icon2: "apple",
      },
      details: "Proficient in iOS App Development using Swift4. Have relevant experience in CoreData, Auto Layout, UIKIt and other frameworks."
    },
    {
      title: "Frontend Development",
      icons: {
        icon1: "html5",
        icon2: "css3",
        icon3: "javascript",
        icon4: "bootstrap",
        icon5: "wordpress"
      },
      icon: 'code',
      details: "Experienced in creating custom websites with HTML5, CSS, Javascript and Bootstrap components as well as creating websites using " +
          "website deployment platforms such as Wordpress and Wix."
    },
    {
      title: "Backend Development",
      icons: {
        icon1: "mongodb",
        icon2: "mysql",
        icon3: "heroku",
      },
      details: "Experienced in writing queries and using MongoDB with Mongoose, and SQL as Databases. Additionally familiar with deploying web applications using " +
          "Heroku."
    },
    {
      title: "Javascript Frameworks",
      icons: {
        icon1: "react",
        icon2: "nodejs",
        icon3: "express",
        icon4: "jquery",
      },
      details: "Thorough experience with using React.js, Node.js, and Express.js to make web applications fullstack with " +
          "efficient frontend and serverside communication as well as using jQuery for mild animations."
    },
    {
      title: "Imperative Programming",
      icons: {
        icon1: "csimple",
        icon2: "cplusplus",
        icon3: "python",
      },
      details: "Experienced in Object Oriented programming, algorithmic programming and basic abstract data structures using languages such as C, C++, and Python."
    },
    {
      title: "Web Design",
      icons: {
        icon1: "photoshop",
        icon2: "illustrator"
      },
      details: "Proficient in creating UI Mockups, Icons and Web Design Templates using softwares such as Adobe Photoshop, " +
          "Adobe Illustrator, Sketch and Figma."
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "EasyExpense",
      subtitle: "My first application developed in iOS using xCode and the Swift programming language. Easy Expense helps high schoolers all the way to seniors help track their expenses by using a user friendly UI that can lodge expenses in under 10 seconds!",
      imageUrl: "/images/portfolio-image-1.jpg",
      technologies: "Swift, xCode, Sketch",
      icons: {
        icon1: "swift",
        icon2: "apple"
      },
      largeImageUrl: [
      ],
      url: 'https://apps.apple.com/us/app/easy-expense-expense-tracker/id1358154341?ls=1'
    },
    {
      id: 2,
      title: "This Website!",
      subtitle: "Built completely from scratch using React.js, this website is my first venture into web devlopment, using different npm packages made for react, I was able to play around with different components and animations to explore react's ability to the fullest.",
      imageUrl: "/images/portfolio-image-2.jpg",
      technologies: "React.js, Redux, Node.js",
      icons: {
        icon1: "react",
        icon2: "nodejs",
        icon3: "heroku"
      },
      largeImageUrl: [

      ],
      url: 'https://www.arnavgup.com'
    },

    {
      id: 3,
      title: "Who's Coffin",
      subtitle: "Winner of TO Hacks Facebook Spark AR Challenge, this is an instagram filter inspired by the popular coffin meme circulating around social media. This project was different to the rest of mine, as it used different technologies such as Facebook Spark AR Studio, and allowed me to use my heavy knowledge of Photoshop.",
      imageUrl: "/public/images/portfolio-image-6.jpg",
      technologies: "Spark AR Studio, Photoshop",
      icons: {
        icon1: "photoshop",
      },
      largeImageUrl: [

      ],
      url: 'https://devpost.com/software/who-s-coffin'
    },
    {
      id: 4,
      title: "Altar of RDAI",
      subtitle: "Built at ETH Waterloo 2019, This was the first time I ever explored anything to do with BlockChain, but the experience was fun and unique. Built at ETH Waterloo, Altar of RDAI is a web app designed in React helped to calculate and invest interest earned by the cryptocurrency DAI into open source blockchain projects",
      imageUrl: "/images/portfolio-image-3.jpg",
      technologies: "HTML, CSS, Javascript, DAI(Blockchain)",
      icons: {
        icon1: "javascript",
        icon2: "html5",
        icon3: "css3",
      },
      largeImageUrl: [
      ],
      url: 'https://devpost.com/software/zoltaibis'
    },
    {
      id: 5,
      title: "Periodic Table Glossary",
      subtitle: "One of the first things I ever programmed. Built in C++, this Periodic Table glossary was to help middle schoolers in my school learn interesting and quick facts about the periodic table and help themmake flashcards for their tests!",
      imageUrl: "/images/portfolio-image-4.jpg",
      technologies: "C++",
      icons: {
        icon1: "cplusplus"
      },
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/arnav1gup/C-Periodic-Table-Glossary'
    },
    {
      id: 6,
      title: "HLTH Track",
      subtitle: "Placing 2nd in Golden Hacks 2019, HLTH Track is a react application that helps patients keep medical records, documents, vaccination history, and other important medical data and have access to them right at their fingertips. ",
      imageUrl: "/images/portfolio-image-5.jpg",
      technologies: "React.js, Node.js, Figma",
      icons: {
        icon1: "react",
        icon2: "nodejs",
        icon3: "express",
        icon4: "photoshop"
      },
      largeImageUrl: [
        "/images/portfolio-image-5-lg.jpg",
        "/images/portfolio-image-5-lg2.jpg"
      ],
      url: 'https://devpost.com/software/hlthtrack'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "May 2020 - Aug 2020",
        position: "QA Automation and Full Stack Engineer",
        company: "Relay Financial",
        location: "Waterloo, Ontario",
        detail1: "Conducted heavy API unit tests using Jest, Cypress and Enzyme.",
        detail2: "Tested external API's by creating local SQLite mocks and stubs and mock jest unit tests."
      },
      {
        id: 2,
        year: "Jan 2020 - Apr 2020",
        position: "Web and Mobile Developer",
        company: "HiRide",
        location: "Waterloo, Ontario",
        detail1: "Worked on development of custome iOS components to complement the existing React Native components and infrastructure.",
        detail2: "Further improved Javascript skills by working with frameworks such as React.js and Express.js"
      },
      {
        id: 3,
        year: "July 2018 - Ongoing",
        position: "CEO and Co-Founder ",
        company: "CollegeFit",
        location: "San Francisco, Califronia",
        detail1: "Led a team to co-found a company in a 4 week incubator at San Francisco aiming to provide better college tours to individuals.",
        detail2: "Raised $5000 in funding as a result of winning the final pitch competiton."
      },
      {
        id: 4,
        year: "July 2017 - Ongoing",
        position: "iOS Developer",
        company: "Self Employed",
        location: "Singapore", 
        detail1: "Used guerilla advertising to market and attract freelancing and tutoring oppurtunities for iOS development.",
        detail2: "Succesfully worked on iOS applications for 3 local startups in Singapore."
      },
      {
        id: 5,
        year: "Jan 2017 - Apr 2017",
        position: "Finance Manager and Web Developer",
        company: "United Singapore",
        location: "Singapore",
        detail1: "Helped manage finances and negotiate with the Singapore government for funding over $75,000 for non profit events.",
        detail2: "Developed the United Singapore website using HTML, CSS and Bootstrap components."
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1 437-249-0254'],
    emailAddress: ['arnav1gup@gmail.com', 'arnav.gupta@uwaterloo.ca']
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});