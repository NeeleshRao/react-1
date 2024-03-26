import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 my-2">Vite with Tailwind</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card
          username="Sherlock"
          location="Bengaluru"
          imgpath="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg"
        />

        <Card
          username="Watson"
          location="Mysuru"
          imgpath="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_640.jpg"
        />
      </div>
    </>
  );
}

export default App;
