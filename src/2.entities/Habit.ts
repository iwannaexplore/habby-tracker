import Day from "./Day";

class Habit {
 constructor(id: number, name: string, days: Day[], goal: number, achieved: number) {
  this.id = id;
  this.name = name;
  this.days = days;
  this.goal = goal;
  this.achieved = achieved;
 }

 id: number
 name: string
 days: Day[]
 goal: number
 achieved: number
}

export default Habit;