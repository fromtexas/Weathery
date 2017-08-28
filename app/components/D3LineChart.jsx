import React, {Component} from 'react'
import * as d3 from 'd3'

import Dots from 'D3Dots'
import Axis from 'D3Axis'
import Grid from 'D3Grid'
import ToolTip from 'D3ToolTip'
import CurrentWeather from 'CurrentWeather'
import WeatherList from 'WeatherList'


class LineChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      tooltip:{ display: false, data: {key: '', value: ''}},
      width:this.props.width
    }
  }

  updateDimensions() {
        this.setState({width: parseInt(window.innerWidth / 1.3)});
  }

  componentDidMount() {
        window.addEventListener('resize', this.updateDimensions.bind(this));
  }


  showToolTip(e){
      e.target.setAttribute('fill', '#FFFFFF');

      this.setState({tooltip:{
          display:true,
          data: {
              key:e.target.getAttribute('data-key'),
              value:e.target.getAttribute('data-value')
              },
          pos:{
              x:e.target.getAttribute('cx'),
              y:e.target.getAttribute('cy')
          }

          }
      });
  }

  hideToolTip(e){
      e.target.setAttribute('fill', '#007bff');
      this.setState({tooltip:{ display:false,data:{key:'',value:''}}});
  }

  render () {

    var {forecast} = this.props;


    var data = forecast.list.map((item) => {
      return {
        day: item.dt_txt,
        count: item.main.temp
      }
    });

   data = data.filter((item) => {
      if(item.day.indexOf('09:00:00') != -1 || item.day.indexOf('15:00:00') != -1 || item.day.indexOf('21:00:00') != -1 ){
        return item
      }
    });



    var margin = {top: 5, right: 50, bottom: 20, left: 50};
    var w = this.state.width - (margin.left + margin.right);
    var h = this.props.height - (margin.top + margin.bottom);

    var parseDate = d3.timeParse('%Y-%m-%d %H:%M:%S');


    data.forEach((d) => {
        d.date = parseDate(d.day);
    });


    var x = d3.scaleTime().domain(d3.extent(data, (d) => {
            return d.date;
        })).rangeRound([0, w]);

    var y = d3.scaleLinear().domain([d3.min(data, (d) => {
            return d.count;
        }), d3.max(data, (d) => {
            return d.count;
        })]).range([h, 0]);

    var yAxis = d3.axisLeft(y).ticks(15);

    var xAxis = d3.axisBottom(x).tickValues(data.map((d,i) => {
            if(i>0)
                return d.date;
        }).splice(1)).ticks(15);

    var yGrid = d3.axisLeft(y).ticks(5).tickSize(-w, 0, 0).tickFormat('');

    var line = d3.line().x((d) => {
            return x(d.date);
        }).y((d) => {
            return y(d.count);
        }).curve(d3.curveCardinalOpen.tension(0.5));

    var transform = `translate(${margin.left}, ${margin.top})`;

    return (
      <div>
      <div className='chart-flex'>
        <CurrentWeather forecast={forecast}/>
        <div className='svg'>
          <svg ref='svg' id={this.props.chartId} width={this.state.width} height={this.props.height}>

              <g transform={transform}>

                  <Grid h={h} grid={yGrid} gridType="y"/>

                  <Axis h={h} axis={yAxis} axisType="y" />
                  <Axis h={h} axis={xAxis} axisType="x"/>

                  <path className="line shadow" d={line(data)} strokeLinecap="round"/>

                  <Dots data={data} x={x} y={y} showToolTip={this.showToolTip.bind(this)} hideToolTip={this.hideToolTip.bind(this)}/>

                  <ToolTip tooltip={this.state.tooltip}/>
              </g>
          </svg>
        </div>
      </div>
      <WeatherList forecast={forecast}/>
    </div>
    )
  }

}


LineChart.defaultProps = {
  width: parseInt(window.innerWidth / 1.3),
  height: 500,
  chartId: 'v1_chart'
}

export default LineChart
