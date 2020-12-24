import React from "react";
import  {startOfWeek, format, addDays, endOfMonth,
  endOfWeek,
  startOfMonth,
  parse,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
}  from "date-fns";
import './index.css';
class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-6">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
          <span>{format(this.state.currentMonth, dateFormat)}</span>
          
          <div onClick={this.nextMonth} className="icon">chevron_right</div>
        
        </div>
        <div className="col col-6">
        <div className="schedule-class-btn" onClick={this.props.addClass}>Schedule Class</div>
          {/* <div onClick={this.props.addMeeting} className="meet-now-btn">Meet Now</div>           */}
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <>
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
      <div className="upcoming-classes">
        <div className="class-list-head">
        Upcoming Classes
        </div>
        <div className="class-list">
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
          <div className="class-item">
            <div className="classlist-date">28 JAN 2020 | 11:30AM - 12:30 PM</div>
            <div className="classlist-link">How to Add Content in Photoshop </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Calendar;
