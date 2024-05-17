import "bootstrap/dist/css/bootstrap.min.css"
import { useRef, useState } from "react";
import Canvas from "./Canvas";
import Navbar from "./Navbar";
function Header(){

      const canvasRef=useRef(null);
      const ctxRef=useRef(null);

      const [tool,setTool]=useState("pencil");
      const [color,setColor]=useState("#000000");
      const [elements,setElements]=useState([]);
      const [history,setHistory]=useState([]);
      


      const handelClear = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.fillRect= "white";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            setElements([]);
          };
          

          const undo = () => {
            setHistory((prevHistory) => [...prevHistory,elements[elements.length - 1]]);
            setElements((prevElements) => prevElements[prevElements.length-1].path=[]);
            console.log(elements);
          };
          
          const redo = () => {
            setElements((prevElements) => [...prevElements, history[history.length - 1]]);
            setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
          };
          
          

      return <>
            <Navbar/>
      <div className="container-fluid">
            
            <div className="col-md-12 mt-1 mb-5 d-flex justify-content-around">
                  
                  <div className="d-flex col-md-2 justify-content-between">
                        {/* <div className="d-flex gap-1 align-items-center">
                              <label htmlFor="pencil">Pencil</label>
                              <input className="mt-1" type="radio" name="tool" id="pencil" value={"pencil"} onChange={(e)=>setTool(e.target.value)} />       
                        </div> */}
                        <div className="d-flex gap-1 align-items-center">
                              <label htmlFor="color">Color</label>
                              <input className="mt-1" type="color" name="tool" id="color" value={color} onChange={(e)=>setColor(e.target.value)} />       
                        </div>
                  </div>
                     
                  <div className="justify-content-between">
                        <button onClick={()=>undo()} disabled={elements.length==0} className="btn btn-primary m-1">UNDO</button>
                        <button onClick={()=>redo()} disabled={history.length<1} className="btn btn-primary m-1">REDO</button>
                        <button onClick={handelClear} className="btn btn-danger m-1">CLEAR</button>
                  </div>
            </div>
            <div className="col-md-9 border mx-auto">
                  <Canvas canvasRef={canvasRef} ctxRef={ctxRef} elements={elements} setElements={setElements} tool={tool} color={color}/>
            </div>  
      </div>
      </>
}
export default Header;