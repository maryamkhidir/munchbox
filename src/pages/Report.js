import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {selectApp} from '../app/appSlice'
import { Check, Dash, DashUp, PageBreak, Spinner } from '../components/OtherComponents'
import { RWebShare } from "react-web-share";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export const AdminReport = () => {
  const app = useSelector(selectApp)
  const analytics = app.analytics
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(analytics["dataset"]) setLoading(false)
  }, [analytics])

  return(
    <div className='dashboard'>
      {(loading) ?
        <Spinner /> : 
        <>
          <Analytics />
          <ResponseChart />
        </>
      }
    </div>
  )
}

const Analytics = () => {
  const app = useSelector(selectApp)
  const analytics = app.analytics

  const data = {
    labels: Object.keys(analytics.dataset),
    datasets: [{
      label: 'Poll Analytics',
      data: Object.values(analytics.dataset),
      backgroundColor: analytics.datacolors
    }]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
  }

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width, height = chart.height, ctx = chart.ctx;

     height = (height >= 418) ?(height - 100) : (height - 140)

      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.fillStyle = "#1D2432";
      ctx.textBaseline = "middle";
      var text = (analytics.datacolors).length,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2 ;
      ctx.fillText(text, textX, textY);
      ctx.save();
    } 
  }]

  return(
    <div className='analytics'>
      <div className='analytics__title'>Survey User Location</div>
      <div className='analytics__pie'>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    </div>
  )
}

const Report = () => {
  return(
    <>
      <ResponseMessage />
      <ResponseChart />
    </>
  )
}

const ResponseMessage = () => {
  return(
    <div className='response-message'>
      <div className='response-message__container'>
        <div className='response-message__container--title'><Check /><span>Thank You!</span></div>
        <p>Thanks for your response. You can invite your friends to participate in the poll by clicking on the share button below.</p>
      </div>
      <RWebShare
        data={{
          text: "Are you a frequent traveler? Join us on our mission of making travels safer for people like you by filling our survey!",
          url: "https://polls.munchbox.com",
          title: "munchbox Polls",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className='btn bordered'>Share</button>
      </RWebShare>
      <a href="https://munchbox.com/join-waitlist" className='btn primary' style={{marginBottom: 20}}>Join Waitlist</a>
      <PageBreak />
    </div>
  )
}

const ResponseChart = () => {
  const app = useSelector(selectApp)
  const report = app.questions
  return(
    <div className='response-chart'>
      <div className='response-chart--title'>Report Data Chart</div>
      <div className='chart-canvas'>
        <BarHead />
        {Object.values(report).map((question) => 
          <BarUnit key={question.id} title={question.title} value={question.avg_rating} tag={question.tag} />
        )}
      </div>
    </div>
  )
}

const BarHead = () => {
  return(
    <div className='bar-head'>
      <div className='bar-head__label' />
      <div className='bar-head__container'>
        <div className='bar-head__container--box'>
          {[0,1,2,3,4,5].map((val) => 
            <div key={val}>{val} <DashUp /></div>
          )}
        </div>
        <div className='bar-head__container--axis'>&nbsp;</div>
      </div>
      <div className='bar-head__value' />
    </div>
  )
}

const BarUnit = ({title, value, tag}) => {
  const width = `${Math.round((value/5) * 100)}%`
  const bgColors = {required: "#DB5403", recommend:"#00B45B", information:"#B4A906"}
  return(
    <div className='bar'>
      <div className='bar-label'>
        <span className='bar-title'>{title}</span>
        <Dash />
      </div>
      <div className='bar-container'>
        <div className='bar-container__box'>
          <div className='bar-container__box--fill' style={{width:width, backgroundColor: bgColors[tag]}}>
            &nbsp;
          </div>
        </div>
      </div>
      <div className='bar-desc'>
        <Dash />
        <span>{value}</span>
      </div>
    </div>
  )
}

export default Report