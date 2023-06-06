import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "#E8F1FF" }}>
        <Content1 />
      </div>
      <Content2 />
      <Content3 />
      <Content4 />
    </div>
  );
}

export default Home;
