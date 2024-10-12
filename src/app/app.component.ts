import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Item {
  id: number;
  type: 'action' | 'trigger';
  positionX: number;  // X position in the canvas
  positionY: number;  // Y position in the canvas
  name: string; // Name of the action or trigger
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DragDropModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  predefinedList: Item[] = [
    { id: 1, type: 'action', positionX: 0, positionY: 0, name: 'Send Email' },
    { id: 2, type: 'trigger', positionX: 0, positionY: 0, name: 'Delay' },
    { id: 3, type: 'trigger', positionX: 0, positionY: 0, name: 'When Email is Opened' },
  ];
  canvasDroppedItems: Item[] = [];

  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      // Reorder items within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updatePositions(event.container.data);
    } else {
      // Move items between lists
      const item = event.previousContainer.data[event.previousIndex];
      const newItem: Item = { 
        ...item, 
        positionX: event.currentIndex * 100, // Assuming each item has a width of 100px
        positionY: this.canvasDroppedItems.length * 100 // Assuming each item has a height of 100px
      };

      // Move item to the new container
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
      // Update the position of the moved item
      this.canvasDroppedItems[event.currentIndex] = newItem;

      // Update the positions of other items
      this.updatePositions(event.container.data);
    }
  }

  updatePositions(items: Item[]) {
    items.forEach((item, index) => {
      item.positionX = index * 100; // Update X position based on index
      item.positionY = Math.floor(index / 3) * 100; // Example logic for Y position
    });
  }

  saveCanvas() {
    const jsonData = JSON.stringify(this.canvasDroppedItems, null, 2); // Pretty print the JSON
    console.log(jsonData);
  }
}
