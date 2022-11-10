class Day {
 constructor(id: number, isCompleted: boolean, date: Date, habitId: number) {
  this.id = id;
  this.isCompleted = isCompleted;
  this.date = date;
  this.habitId = habitId;
 }

 id: number
 isCompleted: boolean
 date: Date
 habitId: number
}
export default Day;