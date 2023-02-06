import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
    const [data, setdata] = useState("")
    const [inputData, setInputData] = useState({
      section : "",
      studentClass : ""
    })

    async function getStudentData() {
        axios.get('http://localhost:4000/student')
        .then((response) => setdata(response.data))
    }

    useEffect(() => {
      getStudentData()
    }, [])

    function handleSelection(e){
      let name = e.target.name
      let value = e.target.value
      setInputData({...inputData, [name]:value})
      console.log(inputData)
    }

    function handleSubmit(e) {
      e.preventDefault()
      // switch (inputData.name ) {
      //   case value:
          
      //     break;
      
      //   default:
      //     break;
      // }

    }

  return (
    <div className="container-fluid d-flex min-vh-100 justify-content-center align-items-center p-5 bg-dark">
      <div className="col-lg-7 col-md-9 col-sm-12 p-5 bg-white rounded-5">
        <form action="" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label for="" className="form-label">Section:</label>
                <select className="form-select form-select-lg" name="section" id="section" onChange={handleSelection}>
                    <option selected>Select Section...</option>
                    {data.section && data.section.map((value, index) => {
                      return (<option value="">{value}</option>)
                    })}
                </select>
            </div>
            
            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label for="" className="form-label">Class:</label>
                <select className="form-select form-select-lg" name="studentClass" id="studentClass" onChange={handleSelection}>
                    <option selected>Select Class...</option>
                    {data.studentClass && data.studentClass.map((value, index) => {
                      return (<option value="">{value.name}</option>)
                    })}
                </select>
            </div> 

            <div className=" mb-3 form-check">
              <input className="form-check-input" type="checkbox" value="" id="confrimSelection"/>
              <label className="form-check-label" for="confrimSelection">
                I am sure that my selections are correct...
              </label>
            </div>

            <button type="button" className="col-lg-6 col-md-6 col-sm-12 btn btn-lg-primary">Proceed to record</button>
          </div>
        </form>

      </div>       
    </div>
  )
}

export default Dashboard
