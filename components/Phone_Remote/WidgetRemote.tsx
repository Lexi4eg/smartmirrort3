"use client";
import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import sendWidget from "./sendWidget";

interface WidgetPosition {
  position: number;
  widget: string;
  colSpan: number;
  rowSpan: number;
}

export default function WidgetRemote() {
  const [widgets, setWidgets] = useState<WidgetPosition[]>([
    { position: 1, widget: "1", colSpan: 2, rowSpan: 2 },
    { position: 2, widget: "2", colSpan: 2, rowSpan: 2 },
    { position: 3, widget: "3", colSpan: 2, rowSpan: 2 },
    { position: 4, widget: "4", colSpan: 2, rowSpan: 2 }, // Ensure there's a widget with a position of 4
    { position: 5, widget: "5", colSpan: 2, rowSpan: 2 },
    { position: 6, widget: "6", colSpan: 2, rowSpan: 2 },
    { position: 7, widget: "7", colSpan: 2, rowSpan: 2 },
    { position: 8, widget: "8", colSpan: 2, rowSpan: 2 },
    { position: 9, widget: "9", colSpan: 2, rowSpan: 2 },
  ]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgets(items);
    sendWidget(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="widgets">
        {(provided) => (
          <div
            className="grid grid-cols-3 grid-rows-3 gap-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {widgets.map((widget, index) => (
              <Draggable
                key={index}
                draggableId={`draggable-${index}`} // Ensure draggableId is correctly set
                index={index}
              >
                {(provided) => (
                  <div
                    className="bg-gray-500"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {widget.widget}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
