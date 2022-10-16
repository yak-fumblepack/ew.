import { useLocation, Link } from "react-router-dom";
import Medications from '../routes/medications'
import { FaHome, FaArrowLeft, FaSearch, FaLink } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect, useState } from "react";

const StatisticsPage = () => {

  const location = useLocation()
  // const res_data = {
  //   master: location.state.res_data,
  //   primary: location.state.res_data.primary,
  //   acne: location.state.res_data.acne,
  //   eczema: location.state.res_data.eczema,
  //   hives: location.state.res_data.hives,
  // }

  const [wikiExerpt, setWikiExerpt] = useState('')

  const results = {
    condition: location.state.condition,
    acne: {
      disease: "Acne",
      confidence: location.state.scans[0].confidence,
    },
    eczema: {
      disease: "Eczema",
      confidence: location.state.scans[1].confidence,
    },
    atopic_dermatitis: {
      disease: "Atopic Dermatitis",
      confidence: location.state.scans[2].confidence,
    },
    light_disease: {
      disease: "Light Disease",
      confidence: location.state.scans[3].confidence,
    },
    melanoma: {
      disease: "Melanoma",
      confidence: location.state.scans[4].confidence,
    },
    contact_dermatitis: {
      disease: "Contact Dermatitis",
      confidence: location.state.scans[5].confidence,
    },
    medications: Medications[location.state.condition],
  }

  const res_data = {
    condition: results['condition'],
    scans: [
      { disease: results['acne']['disease'], confidence: results['acne']['confidence'] },
      { disease: results['eczema']['disease'], confidence: results['eczema']['confidence'] },
      { disease: results['atopic_dermatitis']['disease'], confidence: results['atopic_dermatitis']['confidence'] },
      { disease: results['light_disease']['disease'], confidence: results['light_disease']['confidence'] },
      { disease: results['melanoma']['disease'], confidence: results['melanoma']['confidence'] },
      { disease: results['contact_dermatitis']['disease'], confidence: results['contact_dermatitis']['confidence'] }
    ]
  }



  const top_3 = res_data.scans.sort((a, b) => b.confidence - a.confidence).slice(0, 3)

  const list_without_top_1 = res_data.scans.sort((a, b) => b.confidence - a.confidence).slice(1, 6)

  const top_1 = res_data.scans.sort((a, b) => b.confidence - a.confidence).slice(0, 1)

  useEffect(() => {
    const wikiExtract = async (condition) => {
      // remove spaces from condition or underscore and replace with plus sign and make lowercase
      const condition_formatted = condition.replace(/ /g, '+').toLowerCase()
      console.log(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exsentences=5&explaintext=false&exintro&titles=${condition_formatted}`)
      const res = await fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exsentences=5&explaintext=false&exintro&titles=${condition_formatted}`)
      const data = await res.json()
      const summary = data.query.pages[Object.keys(data.query.pages)[0]].extract
      console.log(summary)
      setWikiExerpt(summary)
    }
    wikiExtract(top_1[0].disease)
  }, []);

  const colorChanger = (confidence) => {
    if (confidence > 0.9) {
      return "bg-red-900"
    }
    else if (confidence > .8) {
      return "bg-red-800"
    }
    else if (confidence > .7) {
      return "bg-red-700"
    }
    else if (confidence > .6) {
      return "bg-red-600"
    }
    else if (confidence > .5) {
      return "bg-red-500"
    }
    else if (confidence > .4) {
      return "bg-red-400"
    }
    else if (confidence > .3) {
      return "bg-red-300"
    }
    else if (confidence > .2) {
      return "bg-red-200"
    }
    else if (confidence > .1) {
      return "bg-red-100"
    }
    else {
      return "bg-red-50"
    }
  }

  const colorChangerGraph = (confidence) => {
    if (confidence > 0.9) {
      return "rgba(255, 0, 0, 0.5)"
    }
    else if (confidence > .8) {
      return "rgba(255, 0, 0, 0.4)"
    }
    else if (confidence > .7) {
      return "rgba(255, 0, 0, 0.3)"
    }
    else if (confidence > .6) {
      return "rgba(255, 0, 0, 0.2)"
    }
    else {
      return "rgba(255, 0, 0, 0.1)"
    }
  }




  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold py-12">Your Results</h1>

      <div className="flex">
        <div className="w-1/6">
          <div className="flex flex-col">
            <div className="grid gap-4 grid-rows-2">
              <Link to="/dashboard/upload" className="p-4 hover:scale-110 duration-200 transition ease-in-out w-fit rounded-lg bg-[#79D1C3]">
                <FaArrowLeft color="#C9FDD7" />
              </Link>
              <Link to="/" className="p-4 hover:scale-110 duration-200 transition ease-in-out w-fit rounded-lg bg-[#79D1C3]">
                <FaHome color="#C9FDD7" />
              </Link>
              <Link to="/dashboard/upload" className="p-4 hover:scale-110 duration-200 transition ease-in-out w-fit rounded-lg bg-[#79D1C3]">
                <FaSearch color="#C9FDD7" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-5/6">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-1">Dashboard</h1>
            <h2 className="text-sm text-gray-500 pb-3">Generated with a custom SkinClassifierML Model developed by <a className="text-[#79D1C3]" href="https://github.com/yak-fumblepack/ewmu">Ewmu</a></h2>
            <div className="flex flex-row rounded-lg p-6">
              {/* create three circles based on the top_3 list and show the confidence percentages */}
              <div className="flex flex-row px-6 gap-24 justify-center items-center">
                {top_3.map((item, index) => (
                  <figure key={index}>
                    <div className={`w-64 h-64 rounded-full flex justify-center text-center items-center ${colorChanger(item.confidence)}`}>
                      <div className={`text-2xl font-extrabold uppercase ${item.confidence <= 0.3 ? "text-[#EF7C8E]" : "text-white"}`}>{item.disease}<br />{item.confidence * 100}%</div>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            <div className="flex flex-row rounded-lg p-6">
              <div className="flex flex-col w-1/3 border-2 gap-8 p-5 rounded-lg">
                <h1 className="text-xl font-bold">Your Condition</h1>
                <p>
                  {wikiExerpt ? wikiExerpt : "Loading..."}
                  <br />
                  <div className="pt-3 flex inline-flex">
                    <a className="underline decoration-4 decoration-[#79D1C3]" href={`https://en.wikipedia.org/wiki/${top_1[0].disease.replace(/ /g, '_')}`} target="_blank">Read More</a>
                  </div>
                </p>
              </div>
              <div className="w-2/3 h-fit">
                <Bar
                  data={{
                    labels: list_without_top_1.map((item) => item.disease),
                    datasets: [
                      {
                        label: "Confidence",
                        data: list_without_top_1.map((item) => item.confidence),
                        backgroundColor: list_without_top_1.map((item) => colorChangerGraph(item.confidence)),
                        borderColor: list_without_top_1.map((item) => colorChangerGraph(item.confidence)),
                        borderWidth: 1,
                      }
                    ]
                  }}
                  options={{
                    indexAxis: 'y',
                    scales: {
                      x: {
                        beginAtZero: true,
                        max: 0.5,
                        ticks: {


                        }
                      }
                    }
                  }
                  } />
              </div>
            </div>


          </div>
          <div className="mb-24">
            <h1 className="text-xl font-bold pb-3">Recommended OTC Medications</h1>
            <Medications />
          </div>
        </div>

      </div>


    </div>

    // <div>
    //   <div className="flex items-start gap-20 justify-center" style={{ paddingTop: '30px' }}>
    //     {Object.keys(ordered_scans).slice(0, 3).map((key) => {
    //       return (
    //         <figure key={key}>
    //           <div className={`font-bold text-white text-5xl rounded-full flex items-center justify-center ${colorChanger(ordered_scans[key].confidence)}`} style={{ height: '300px', width: '300px' }}>{ordered_scans[key].confidence}%</div>
    //           <figcaption className="font-bold text-7xl text-greu-700 text-center">{ordered_scans[key].disease}</figcaption>
    //         </figure>
    //       )
    //     })}
    //     {/* <figure>
    //         <div className="font-bold text-white text-5xl rounded-full bg-red-500 flex items-center justify-center" style={{height: '300px', width: '300px'}}>{res_data.acne}</div>
    //         <figcaption className="font-bold text-7xl text-grey-700 text-center">Acne</figcaption>
    //       </figure>
    //       <figure>
    //         <div className="font-bold text-white text-5xl rounded-full bg-red-500 flex items-center justify-center" style={{height: '300px', width: '300px'}}>{res_data.eczema}</div>
    //         <figcaption className="font-bold text-7xl text-grey-700 text-center">Eczema</figcaption>
    //       </figure>
    //       <figure>
    //         <div className="font-bold text-white text-5xl rounded-full bg-red-500 flex items-center justify-center" style={{height: '300px', width: '300px'}}>{res_data.acne}</div>
    //         <figcaption className="font-bold text-7xl text-grey-700 text-center">Hives</figcaption>
    //       </figure> */}
    //   </div>
    //   <div>
    //     {Object.keys(ordered_scans).map((key) => {
    //       return (<p key={key}>{ordered_scans[key].disease} : {ordered_scans[key].confidence}%</p>)
    //     })}
    //   </div>

    //   {/* <Medications/> */}

    // </div>

  );
}

export default StatisticsPage;