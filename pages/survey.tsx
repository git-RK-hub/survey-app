import React, { useState, createContext, useEffect } from 'react';
import { SurveyPage } from '../components';
import { submitSurvey } from "../services/survey";

export enum SurveyState {
    AGE = 'age',
    SYMPTOMS = 'symptoms',
    OTHERSYMPTOMS = 'other-symptoms',
    CONDITIONS = 'conditions',
    LOCATION = 'location',
    FINISHED = 'finished'
}

type Symptoms = {
    fever: boolean;
    highestTemperature: number;
    cough: boolean;
    shortnessOfBreath: boolean;
    chills: boolean;
    chestPain: boolean;
    bodyAches: boolean;
    nausea: boolean;
    diarrhea: boolean;
    abdominalPain: boolean;
    fatigue: boolean;
    sneezing: boolean;
    soreThroat: boolean;
    runnyNose: boolean;
    headAche: boolean;
    rash: boolean;
    other: [string];
}

type MedicalConditions = {
    asthma: boolean;
    diabetes: boolean;
    highBloodPressure: boolean;
    kidneyDisease: boolean;
    liverDisease: boolean;
    other: [string];
}

type CovidAnswers = {
    dateOfSymptoms: Date;
    seekedMedicalCare: boolean;
    medicalCareOptions: [string];
    testedForCovid: boolean;
    covidTestResults: string;
    covidTestDiagnosis: string;
    covidTestDate: Date;
    countriesTravelled: [string];
    returnDateFromCountries: Date;
}

type UserInfo = {
    age: number;
    gender: string;
    zipCode: string;
    receivedFluVaccine: string;
}

export const SurveyContext = createContext(null);

const Survey = () => {
    // State hooks for survey questions and survey itself
    // TODO messing around with initial survey state. set to Age after.
    const [surveyState, setSurveyState] = useState(SurveyState.LOCATION);
    const [selectedAgeGroup, setAge] = useState();
    const [selectedSymptoms, setSymptoms] = useState([]);
    const [temperature, setTemperature] = useState({temperature: undefined, unit: 'F'});
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState({});
    
    const onSubmitSurvey = async () => {
        try {
            // TODO grab the states of all questions and merge into one object
            const surveyData = {};
            const submissionResponse = await submitSurvey(surveyData);

            // if (submissionResponse === 200) {
            //     setPage(SurveyState.FINISHED)
            // }
        } catch(error) {
            // error processing submission. We should let the user know something happened.
        }
    };

    const geoLocateUser = () => {
        // TODO add a loading state.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                setLocation('Current location');
                setCoordinates(coords);
            });
        }
    };

    useEffect(() => {
        if (surveyState === SurveyState.FINISHED) {
            window.location.href = '/results';
        }
    }, [surveyState]);

    // TODO create the state machine for the survey.
    // basically handle moving the state to the next corret one after each answer.

    return (
        <SurveyContext.Provider
            value={{
                surveyState,
                setSurveyState,
                selectedAgeGroup,
                setAge,
                selectedSymptoms,
                setSymptoms,
                temperature,
                setTemperature,
                geoLocateUser,
                location,
                setLocation,
            }}
        >
            <SurveyPage/>
        </SurveyContext.Provider>
    )
};

export default Survey;
