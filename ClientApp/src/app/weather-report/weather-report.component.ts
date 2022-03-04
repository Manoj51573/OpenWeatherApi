import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  
  weatherReport
  public flag = false;
  public unit = "imperial";
  public cityName = "Perth";
  public dayName = "";
  public monthName = "";
  public imageType = "";

  public day1MinTemp = "";
  public day2MinTemp = "";
  public day3MinTemp = "";
  public day4MinTemp = "";
  public day5MinTemp = "";

  public day1MaxTemp = "";
  public day2MaxTemp = "";
  public day3MaxTemp = "";
  public day4MaxTemp = "";
  public day5MaxTemp = "";

  public day1Desc = "";
  public day2Desc = "";
  public day3Desc = "";
  public day4Desc = "";
  public day5Desc = "";

  public day1Name = "";
  public day2Name = "";
  public day3Name = "";
  public day4Name = "";
  public day5Name = "";

  public day1MonthName = "";
  public day2MonthName = "";
  public day3MonthName = "";
  public day4MonthName = "";
  public day5MonthName = "";

  public day1ImageIcon= "";
  public day2ImageIcon= "";
  public day3ImageIcon= "";
  public day4ImageIcon= "";
  public day5ImageIcon= "";

  constructor(private api: ApiService) {
    this.getWeatherReport()
  }

  public getWeatherReport() {
    
    this.api.getWeatherReport(this.cityName, this.unit).subscribe(result => {
      this.weatherReport = result
      this.getWeatherDetailData(this.weatherReport)
      this.flag = true;
      console.log("read weather report from API");
    });
  }

  public unitMeasure(unit) {
    if (unit == 'Metric') {
      this.unit = 'Metric';
    } else {
      this.unit = 'Imperial';
    }
    this.getWeatherReport()
  }

  public cityWeather(event: any) {
    this.cityName = event.target.value;
    console.log(this.cityName);
    this.getWeatherReport()
  }

  public getWeatherDetailData(weatherReport:any) {
    for (var i = 0; i < weatherReport.list.length; i++) {
      switch (i) {
        case 0:
          console.log("It is a day1.");
          this.day1MinTemp = weatherReport.list[i].main.temp_min
          this.day1MaxTemp = weatherReport.list[i].main.temp_max
          this.day1Desc = weatherReport.list[i].weather[0].description
          this.day1Name = this.getDayName(weatherReport.list[i].dt_txt);
          this.day1MonthName = this.getMonthName(weatherReport.list[i].dt_txt);
          this.day1ImageIcon = this.getImageIcon(this.day1Desc);
          break;
        case 8:
          console.log("It is a day2.");
          this.day2MinTemp = weatherReport.list[i].main.temp_min
          this.day2MaxTemp = weatherReport.list[i].main.temp_max
          this.day2Desc = weatherReport.list[i].weather[0].description
          this.day2Name = this.getDayName(weatherReport.list[i].dt_txt);
          this.day2MonthName = this.getMonthName(weatherReport.list[i].dt_txt);
          this.day2ImageIcon = this.getImageIcon(this.day2Desc);
          break;
        case 15:
          console.log("It is a day3.");
          this.day3MinTemp = weatherReport.list[i].main.temp_min
          this.day3MaxTemp = weatherReport.list[i].main.temp_max
          this.day3Desc = weatherReport.list[i].weather[0].description
          this.day3Name = this.getDayName(weatherReport.list[i].dt_txt);
          this.day3MonthName = this.getMonthName(weatherReport.list[i].dt_txt);
          this.day3ImageIcon = this.getImageIcon(this.day3Desc);
          break;
        case 23:
          console.log("It is a day4.");
          this.day4MinTemp = weatherReport.list[i].main.temp_min
          this.day4MaxTemp = weatherReport.list[i].main.temp_max
          this.day4Desc = weatherReport.list[i].weather[0].description
          this.day4Name = this.getDayName(weatherReport.list[i].dt_txt);
          this.day4MonthName = this.getMonthName(weatherReport.list[i].dt_txt);
          this.day4ImageIcon = this.getImageIcon(this.day4Desc);
          break;
        case 31:
          console.log("It is a day5.");
          this.day5MinTemp = weatherReport.list[i].main.temp_min
          this.day5MaxTemp = weatherReport.list[i].main.temp_max
          this.day5Desc = weatherReport.list[i].weather[0].description
          this.day5Name = this.getDayName(weatherReport.list[i].dt_txt);
          this.day5MonthName = this.getMonthName(weatherReport.list[i].dt_txt);
          this.day5ImageIcon = this.getImageIcon(this.day5Desc);
          break;
      }
    }
  }


  getMonthName(date): string {
    var month = moment(date).format("MMM");
    var day = moment(date).format("DD");
    var monthName = month + ' ' + day + 'th';
    return monthName
  }
  getDayName(date): string {
    var dayName = moment(date).format("ddd");
    return dayName
  }

  getImageIcon(iconDesc): string{
    var iconImage = "";

    if (iconDesc == 'clear sky') {
      iconImage = "Weather-Sun-icon.png";
    }
    else if (iconDesc == 'moderate rain') {
      iconImage = "Weather-Rain-icon.png";
    }
    else if (iconDesc == 'light rain') {
      iconImage = "Partly-Cloudy-Rain-icon.png";
    }
    else if (iconDesc == 'broken clouds') {
      iconImage = "Weather-Sun-icon.png";
    }
    else if (iconDesc == 'overcast clouds') {
      iconImage = "Weather-Clouds-icon.png";
    }
    else if (iconDesc == 'scattered clouds') {
      iconImage = "Partly-Cloudy-Day-icon.png";
    }
    else if (iconDesc == 'few clouds') {
      iconImage = "Weather-Clouds-icon.png";
    }
    else {
      iconImage = "Weather-Sun-icon.png";
    }
    return iconImage;
 }

  ngOnInit(): void {
    /*this.api.getWeatherReport().subscribe(result => {
      this.weatherReports = result
      console.log("read weather report from API");
    });*/
  }
}
