import App from "./App";
import "./styles.css";
import people from "./data";
export default function Wcy() {
  return (
    <>
      {people.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <Demo
              key={index}
              class={item.class}
              num={index}
              name={item.name}
              sex={item.sex}
            />
          );
        } else {
          return (
            <Demo1
              key={index}
              class={item.class}
              num={index}
              name={item.name}
              sex={item.sex}
            />
          );
        }
      })}
      <App />
    </>
  );
}

function Demo(props) {
  return (
    <div className={props.class}>
      <p style={{ fontSize: "50px" }}>{props.num}</p>
      <p className="name">{props.name}</p>
      <p>{props.sex}</p>
    </div>
  );
}

function Demo1(props) {
  return (
    <div className={props.class}>
      <p style={{ fontSize: "20px" }}>{props.num}</p>
      <p className="name">{props.name}</p>
      <p>{props.sex}</p>
    </div>
  );
}
