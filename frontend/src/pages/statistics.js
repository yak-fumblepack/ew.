import { useLocation } from "react-router-dom";
import Medications from '../routes/medications'

const StatisticsPage = () => {

  // const location = useLocation()
  // const res_data = {
  //   master: location.state.res_data,
  //   primary: location.state.res_data.primary,
  //   acne: location.state.res_data.acne,
  //   eczema: location.state.res_data.eczema,
  //   hives: location.state.res_data.hives,
  // }
  
  const severity = {
    "acne" : "low",
    "eczema" : "low",
    "hives" : "?",
    "others" : "?",
    "chicken" : "critical",
  }

  const results = {}

  const raw_dummy = {condition: 'acne', scans: [{disease: 'acne', confidence: 87.65}, {disease: 'eczema', confidence: 24.55}, {disease: 'hives', confidence: 0}]}
  
  const raw_scans = raw_dummy.scans;

  let ordered_scans = raw_scans;
  for (let i = 0; i < raw_scans.length - 1; i++) {
    for (let j = 0; j < raw_scans.length-i-1; j++){
      if (raw_scans[j] > raw_scans[j+1]) {
        let tmp = ordered_scans[j+1];
        ordered_scans[j+1] = ordered_scans[j]
        ordered_scans[j] = tmp;
      }
    }
  }

  const colorChanger = (confidence) => {
    console.log(confidence)
    if (confidence > 90) {
      return "bg-red-900"
    }
    else if (confidence > 80) {
      return "bg-red-800"
    }
    else if (confidence > 70) {
      return "bg-red-700"
    }
    else if (confidence > 60) {
      return "bg-red-600"
    }
    else if (confidence > 50) {
      return "bg-red-500"
    }
    else if (confidence > 40) {
      return "bg-red-400"
    }
    else if (confidence > 30) {
      return "bg-red-300"
    }
    else if (confidence > 20) {
      return "bg-red-200"
    }
    else if (confidence > 10) {
      return "bg-red-100"
    }
    else {
      return "bg-red-50"
    }
  }


  return (
    <div>
      <div className="flex items-start gap-20 justify-center" style={{paddingTop:'30px'}}>
          {Object.keys(ordered_scans).slice(0, 3).map((key) => {
            return (
              <figure key={key}>
                <div className={`font-bold text-white text-5xl rounded-full flex items-center justify-center ${colorChanger(ordered_scans[key].confidence)}`} style={{height: '300px', width: '300px'}}>{ordered_scans[key].confidence}%</div>
                <figcaption className="font-bold text-7xl text-greu-700 text-center">{ordered_scans[key].disease}</figcaption>
              </figure>
            )
          })}
          {/* <figure>
            <div className="font-bold text-white text-5xl rounded-full bg-red-500 flex items-center justify-center" style={{height: '300px', width: '300px'}}>{res_data.acne}</div>
            <figcaption className="font-bold text-7xl text-grey-700 text-center">Acne</figcaption>
          </figure>
          <figure>
            <div className="font-bold text-white text-5xl rounded-full bg-red-500 flex items-center justify-center" style={{height: '300px', width: '300px'}}>{res_data.eczema}</div>
            <figcaption className="font-bold text-7xl text-grey-700 text-center">Eczema</figcaption>
          </figure>
          <figure>
            <div className="font-bold text-white text-5xl rounded-full bg-red-500 flex items-center justify-center" style={{height: '300px', width: '300px'}}>{res_data.acne}</div>
            <figcaption className="font-bold text-7xl text-grey-700 text-center">Hives</figcaption>
          </figure> */}
      </div>
      <div>
        {Object.keys(ordered_scans).map((key) => {
          return (<p key={key}>{ordered_scans[key].disease} : {ordered_scans[key].confidence}%</p>)
        })}
      </div>

      {/* <Medications/> */}
      
    </div>

  );
}

export default StatisticsPage;