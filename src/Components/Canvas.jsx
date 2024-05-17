import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";
const roughGenerator = rough.generator();

function Canvas({ canvasRef, ctxRef, elements, setElements, tool, color }) {

      const [isDrawing, setIsDrawing] = useState(false);

      useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            canvas.height=window.innerHeight/1.4;
            canvas.width=window.innerWidth*2;
            ctx.strokeStyle=color;
            ctx.lineWidth=2;
            ctx.lineCap="round";
            ctxRef.current=ctx
      }, [])
      useEffect(()=>{
            ctxRef.current.strokeStyle=color;
      },[color])

      useLayoutEffect(() => {
            const ctx = ctxRef.current;
            elements.forEach((element) => {
              if (element.type === "pencil") {
                const path = new Path2D();
                const [startX, startY] = element.path[0];
                path.moveTo(startX, startY);
                element.path.forEach(([x, y]) => path.lineTo(x, y));
          
                ctx.strokeStyle = element.stroke;
                ctx.lineWidth = 3;
                ctx.lineCap = "round";
                ctx.stroke(path);
              }
            });
          }, [elements]);
          

      const handelMouseDown = (e) => {
            const { offsetX, offsetY } = e.nativeEvent;
            if (tool == "pencil") {
                  setElements((prevElements) => [
                        ...prevElements,
                        {
                              type: "pencil",
                              offsetX,
                              offsetY,
                              path: [[offsetX, offsetY]],
                              stroke: color,
                        }
                  ])
            } 
            setIsDrawing(true);
      }
      const handelMouseMove = (e) => {
            const { offsetX, offsetY } = e.nativeEvent;
            if (isDrawing) {
                  const { path } = elements[elements.length - 1];
                  const newPath = [...path, [offsetX, offsetY]];
                  if (tool == "pencil") {
                        setElements((prevElements) =>
                              prevElements.map((ele, index) => {
                                    if (index == elements.length - 1) {
                                          return {
                                                ...ele, path: newPath,
                                          }
                                    } else {
                                          return ele;
                                    }
                              })
                        )
                  } 
            }
      }

      const handelMouseUp = (e) => {
            setIsDrawing(false);
      }

      return <>
            <div onMouseDown={handelMouseDown} onMouseMove={handelMouseMove} onMouseUp={handelMouseUp} className="h-50 w-100 border border-dark border-3 overflow-hidden canvas">
                  <canvas ref={canvasRef} ></canvas>
            </div>
      </>
}
export default Canvas;