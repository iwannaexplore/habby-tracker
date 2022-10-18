class CalendarDay {
 constructor(dayName: string, dayNumber: number, isMustBeHighlighted: boolean) {
  this.dayName = dayName;
  this.dayNumber = dayNumber;
  this.isMustBeHighlighted = isMustBeHighlighted;
 }

 isMustBeHighlighted: boolean;
 dayNumber: number;
 dayName: string;
 isCompleted = false;
}

export default CalendarDay;