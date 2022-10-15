import CalendarDay from "./CalendarDay";
import {useContext} from "react";

class CalendarMonth {

 constructor(date: Date) {
  this.calendarDays = [];
  this.daysAmount = this.getDaysInMonth(date);
  this.fillCalendarDays(date);
 }


 checkIfDayMustBeHighlighted(date: Date) {
  let currentDate = new Date();
  if (currentDate.getFullYear() === date.getFullYear()) {
   if (currentDate.getMonth() === date.getMonth()) {
    if (currentDate.getDate() === date.getDate()) {
     return true;
    }
   }
  }
  return false;
 }

 fillCalendarDays(date: Date) {
  for (let i = 1; i <= this.daysAmount; i++) {
   let dateWithCurrentDayNumber = new Date(date.getFullYear(), date.getMonth(), i);
   let mustBeHighlighted = this.checkIfDayMustBeHighlighted(dateWithCurrentDayNumber);
   let calendarDay = new CalendarDay(this.daysOfWeek[dateWithCurrentDayNumber.getDay()],
    i, mustBeHighlighted, false);
   this.calendarDays.push(calendarDay);
  }
 }

 getDaysInMonth(date: Date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  return new Date(year, month, 0).getDate();
 }

 daysAmount: number;
 daysOfWeek: string[] = ["M", "T", "W", "T", "F", "S", "S"];
 calendarDays: CalendarDay[];
}

export default CalendarMonth;