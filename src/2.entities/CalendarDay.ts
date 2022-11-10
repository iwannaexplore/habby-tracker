class CalendarDay {
 constructor(dayName: string, date: Date, isMustBeHighlighted: boolean) {
  this.dayName = dayName;
  this.date = date;
  this.isMustBeHighlighted = isMustBeHighlighted;
 }

 isMustBeHighlighted: boolean;
 date: Date;
 dayName: string;
 isCompleted = false;
}

export default CalendarDay;