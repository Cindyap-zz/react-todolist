import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-bttn main-black-color">Add</button>
          <h1 className="header-tittle">To Do List</h1>
          <button className="header-bttn main-red-color">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input className="add-input" type="text" />
            <button className="add-bttn main-black-color">Add</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
          <div className="todo">
            <span className="todotext">Learn-React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
