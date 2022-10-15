class CalendarDay {
 constructor(dayName: string, dayNumber: number, isMustBeHighlighted: boolean, isCompleted: boolean) {
  this.dayName = dayName;
  this.dayNumber = dayNumber;
  this.isMustBeHighlighted = isMustBeHighlighted;
  this.isCompleted = isCompleted;
 }

 isMustBeHighlighted: boolean;
 dayNumber: number;
 dayName: string;
 isCompleted: boolean;
}

export default CalendarDay;