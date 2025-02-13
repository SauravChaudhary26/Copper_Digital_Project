import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoApp = () => {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");

   const apiUrl = "http://localhost:5000/todos";
   const fetchTodos = async () => {
      try {
         const response = await axios.get(apiUrl);
         setTodos(response.data);
      } catch (error) {
         console.error("Error fetching todos:", error);
      }
   };

   useEffect(() => {
      fetchTodos();
   }, []);

   const addTodo = async () => {
      if (!text.trim()) return; // Prevent adding empty todos

      try {
         const response = await axios.post(apiUrl, { text });
         setTodos(
            todos.map((todo) => (todo.text === text ? response.data : todo))
         ); // Update the todo with the response data
         setText(""); // Clear input after adding
         fetchTodos(); // Fetch todos again to get the updated list
      } catch (error) {
         console.error("Error adding todo:", error);
         // Optionally, revert UI changes if the request fails
         setTodos(todos);
      }
   };

   const deleteTodo = async (id) => {
      try {
         console.log(id);

         await axios.delete(`${apiUrl}/${id}`);
         setTodos(todos.filter((todo) => todo._id !== id)); // Remove the todo from the UI after deletion
      } catch (error) {
         console.error("Error deleting todo:", error);
      }
   };

   const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px",
      fontFamily: "'Arial', sans-serif",
   };

   const headerStyle = {
      fontSize: "36px",
      color: "#4CAF50",
      marginBottom: "20px",
   };

   const inputStyle = {
      padding: "10px",
      fontSize: "16px",
      width: "300px",
      marginBottom: "20px",
      border: "2px solid #ccc",
      borderRadius: "4px",
      outline: "none",
   };

   const buttonStyle = {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
   };

   const buttonHoverStyle = {
      backgroundColor: "#45a049",
   };

   const ulStyle = {
      listStyleType: "none",
      padding: "0",
   };

   const liStyle = {
      fontSize: "18px",
      backgroundColor: "#f4f4f4",
      padding: "10px",
      margin: "5px 0",
      borderRadius: "4px",
      width: "300px",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
   };

   const deleteButtonStyle = {
      backgroundColor: "#ff4d4d",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
   };

   const deleteButtonHoverStyle = {
      backgroundColor: "#e60000",
   };

   return (
      <div style={containerStyle}>
         <h1 style={headerStyle}>Todo List</h1>
         <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo"
            style={inputStyle}
         />
         <button
            onClick={addTodo}
            style={buttonStyle}
            onMouseOver={(e) =>
               (e.target.style.backgroundColor =
                  buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
               (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
         >
            Add Todo
         </button>
         <ul style={ulStyle}>
            {todos.map((todo) => (
               <li key={todo._id} style={liStyle}>
                  {todo.text}
                  <button
                     style={deleteButtonStyle}
                     onMouseOver={(e) =>
                        (e.target.style.backgroundColor =
                           deleteButtonHoverStyle.backgroundColor)
                     }
                     onMouseOut={(e) =>
                        (e.target.style.backgroundColor =
                           deleteButtonStyle.backgroundColor)
                     }
                     onClick={() => deleteTodo(todo._id)}
                  >
                     Delete
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TodoApp;
