import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Import the CSS file
import Stepper from 'react-stepper-horizontal';
import { Link, useNavigate } from 'react-router-dom';

import ClipLoader from "react-spinners/ClipLoader";
import { toBeRequired } from '@testing-library/jest-dom/matchers';
const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedModel, setSelectedModel] = useState('');
  const [numberOfSamples, setNumberOfSamples] = useState('');
  const navigate = useNavigate();
  const [modelOptionsStep, setModelOptionsStep] = useState(0);
  const [trainModelStep, setTrainModelStep] = useState(0);

  const handleNext = () => {
    setModelOptionsStep((prevStep) => prevStep + 1);
    setTrainModelStep((prevStep) => prevStep + 1);

  };

  const handlePrevious = () => {
    setModelOptionsStep((prevStep) => prevStep - 1);
    setTrainModelStep((prevStep) => prevStep - 1);
  };
  document.title = 'Data Synthesizer';





  // 
  const [createModelClicked, setCreateModelClicked] = useState(false);
  const [generateClicked, setGenerateClicked] = useState(false);
  const [existingModelClicked, setExistingModelClicked] = useState(false);
  //  

  const LoadingSpinner = () => {
    const [loading, setLoading] = useState(true);
  }

  const handleLogoutClick = () => {
    navigate('/');
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const steps = [
    { title: 'Upload file' },
    { title: 'Build the model' },
  ];

  const steps1 = [
    { title: 'Upload file' },
    { title: 'Train the model' },
  ];
  var activeStep = 0;

  const handleBuildModel = () => {
    // Add logic for building the model
  };

  const handleTrainModel = () => {
    // Add logic for training the model
  };

  const handleSaveModel = () => {
    // Add logic for saving the model
  };

  const handleGenerateSamples = () => {
    // Add logic for generating samples

  };
  const handleGenerateButton = () => {
    handleOptionChange('generateSamples');
    setGenerateClicked(true);
    setCreateModelClicked(false);
    setExistingModelClicked(false);

  };

  const handleFileSelect = (e) => {
    // Add logic for handling file selection
  };

  const Spinner = () => {
    return (
      <div className="spinner">
        {/* Use your preferred library or CSS for the spinner animation */}
        {/* For example, using CSS animation */}
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
      </div>
    );
  };


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const [bloading, setLoading1] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])




  return (


    <div className="homePage">


      <div className='nav_bar'>

        {/* <li style={navItemStyle}><a href="/">Home</a></li> */}
        <button className="button_about">ABOUT</button>
        <button className="button_contact">CONTACT US</button>
        <button className="logout-button" onClick={handleLogoutClick}>LOGOUT</button>

        {/* </ul> */}
      </div>
      <div className="action-frame">


        <div className="container">

          <h1 className="heading">Data Synthesizer</h1>
          <h5 className="heading2">An inhouse solution to generate Synthetic data</h5>
          
          <br></br>

          <div>
            <button
              className={createModelClicked ? 'create-model-clicked' : 'top-buttons'}
              // disabled={!isLoggedIn}
              title={'Please click to create a new model'}
              style={{ TransitionDelay: '0.1s' }}
              onClick={() => {
                handleOptionChange('createModel');
                setModelOptionsStep(0);
                setCreateModelClicked(true);
                setGenerateClicked(false);
                setExistingModelClicked(false);

              }}
            >
              Create the Model
            </button>

            <button
              className={existingModelClicked ? 'existingmodels-clicked' : 'top-buttons'}
              // disabled={!isLoggedIn}
              title={'Please click to train an existing model'}
              style={{ TransitionDelay: '0.0001s' }}
              onClick={() => {
                handleOptionChange('existingModels');
                setTrainModelStep(0);
                setGenerateClicked(false);
                setCreateModelClicked(false);
                setExistingModelClicked(true);
              }}
            >
              Train Models
            </button>

            <button
              className={generateClicked ? 'generate-clicked' : 'top-buttons'}
              // disabled={!isLoggedIn}
              title={'Please click to generate samples from an existing model'}
              style={{ TransitionDelay: '0.1s' }}
              onClick={() => {
                handleOptionChange('generateSamples');
                setGenerateClicked(true);
                setCreateModelClicked(false);
                setExistingModelClicked(false);

              }}
            >
              Generate samples
            </button>


          </div>

          {/*  */}

          {/* <button className="top-buttons" onClick={() => handleOptionChange('createModel')}>Create the Model</button>
        <button className="top-buttons" onClick={() => handleOptionChange('generateSamples')}>Generate Samples</button> 
        <button className="top-buttons" onClick={() => handleOptionChange('existingModels')}>Existing Models</button>*/}


          {selectedOption === 'createModel' && (
            <div className="model-options">
              {modelOptionsStep === 0 && (
                <>
                  <br></br>
                  <div className="file-widget">

                    <input type="file" id="fileInput" className="file-input" />
                  </div>


                  <br></br>

                  

                    

                  
                  {/* <span class="loader"></span> */}

                  <div className="model-details">
                  <button >Upload the File</button>
                  <br></br>

                    <button className="button_changedNext" onClick={handleNext}>Next</button>
                  </div>

                  {/* <span className="heading3">Progress percentage</span> */}

                  <Stepper
                    steps={steps}
                    activeStep={modelOptionsStep} />


                </>
              )}

              {modelOptionsStep === 1 && (
                <>
                  <input type="text" placeholder="Enter name of model" />
                  <button className="button_Upload" onClick={handleBuildModel}>Build the Model</button>
                  <button className="button_Upload" onClick={handleSaveModel}>Save the Model</button>
                  <button className="button_Upload" onClick={handleGenerateButton}>Generate Samples</button>
                  <br></br>
                  <button className="button_Upload" onClick={handlePrevious}>Go Back</button>
                  <Stepper
                    steps={steps}
                    activeStep={modelOptionsStep} />
                </>
              )}
            </div>
          )}


          {selectedOption === 'generateSamples' && (
            <div className="samples-options">
              <br></br>
              <br></br>
              <select onChange={(e) => setSelectedModel(e.target.value)}>
                <option value="">Select Model</option>
                {/* Add more options dynamically based on available models */}

              </select>

              <input
                type="text"
                placeholder="No of samples"
                onChange={(e) => setNumberOfSamples(e.target.value)}
              />

              {
                loading ?
                  <ClipLoader color='green' loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
                  :
                  <button onClick={handleGenerateSamples}>Preview</button>
              }

              <div class="mainDiv">
                <div class="childDiv">
                  <span class="text"> 60% </span>
                </div>

              </div>

              <br></br>
            </div>




          )}


          {selectedOption === 'existingModels' && (
            <div className="samples-options1">



              <div className="model-options">
                {trainModelStep === 0 && (
                  <>

                    <select onChange={(e) => setSelectedModel(e.target.value)}>
                      <option value="">Select Model</option>
                      {/* Add more options dynamically based on available models */}

                    </select>
                    <div className="file-widget">

                      <input type="file" id="fileInput" className="file-input" />
                    </div>



                    {
                      // loading?
                      // <ClipLoader color='green' loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader"/>
                      // :
                      <button className="button_Upload">Upload the File</button>
                    }


                    <div className="model-details">
                      <button className="button_changedNext" onClick={handleNext}>Next</button>
                    </div>
                    {/* <span className="heading3">Progress percentage</span> */}
                    {/* <Stepper
        steps={steps1}
        activeStep={activeStep}/> */}
                    <Stepper
                      steps={steps1}
                      activeStep={trainModelStep} />


                  </>
                )}
                {trainModelStep === 1 && (
                  <>
                    <br></br>
                    <button className="button_Upload" onClick={handleTrainModel}>Train the Model</button>
                    <button className="button_Upload" onClick={handleSaveModel}>Save the Model</button>
                    <button className="button_Upload" onClick={handleGenerateButton}>Generate Samples</button>
                    <br></br>
                    <button className="button_Upload" onClick={handlePrevious}>Go Back</button>
                    <Stepper
                      steps={steps1}
                      activeStep={trainModelStep} />
                      <br></br>
                  </>





                )}
              </div>
            </div>

          )}
        </div>

      </div>
    </div>

  );

}

export default HomePage;
