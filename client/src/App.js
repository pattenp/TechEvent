import EventCardGrid from "./components/EventCardGrid";

const events = [
  {
    id: 1, 
    title: "React 101",
    date: "2021-01-25 18:30",
    durationInMinutes: 40,
    presenter: "John Doe",
    description: "Kom och lär dig grundera i React!",
    coverImage: "https://via.placeholder.com/320x280.png?text=React+101",
  },
  {
    id: 2, 
    title: "Webpack",
    date: "2021-01-25 18:30",
    durationInMinutes: 40,
    presenter: "John Doe",
    description: "Lär sig använda webpack!",
    coverImage: "https://via.placeholder.com/320x280.png?text=Webpack",
  },
  {
    id: 3, 
    title: "Express",
    date: "2021-01-25 18:30",
    durationInMinutes: 40,
    presenter: "John Doe",
    description: "Lär sig använda Express!",
    coverImage: "https://via.placeholder.com/320x280.png?text=Express",
  },
  {
    id: 4, 
    title: "TypeScript",
    date: "2021-01-25 18:30",
    durationInMinutes: 40,
    presenter: "John Doe",
    description: "Lär sig använda TypeScript!",
    coverImage: "https://via.placeholder.com/320x280.png?text=TypeScript",
  },
  {
    id: 5, 
    title: "React Native",
    date: "2021-01-25 18:30",
    durationInMinutes: 40,
    presenter: "John Doe",
    description: "Lär sig använda React Native!",
    coverImage: "https://via.placeholder.com/320x280.png?text=React+Native",
  },
];

const App = () => (
  <div>
    <EventCardGrid events={events} />
  </div>
);

export default App;
