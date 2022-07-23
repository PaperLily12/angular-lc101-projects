import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false
    }
  }
  handleLanding() {
    window.alert("The shuttle is landing. Landing gear engaged.")
    this.color = 'green';
    this.height = 0;
    this.message = "The shuttle has landed.";
    this.takeOffEnabled = true
  }
  handleAbort() {
    let result = window.confirm("Do you really want to abort the mission?");
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.message = "Mission aborted.";
      this.takeOffEnabled = true
    }
  }
  moveRocket(direction: string): void {
    const movement = {
      left: [-10000, 0],
      right: [10000, 0],
      up: [0, 10000],
      down: [0, -10000]
    }
    this.width += movement[direction][0]
    this.height += movement[direction][1]
    this.checkProximity()
  }
  checkProximity(): void {
    if (this.height < 0 || this.height > 310000 || this.width < 0 || this.width > 440000) {
      this.color = "orange"
    } else {
      this.color = "green"
    }
  }
}
