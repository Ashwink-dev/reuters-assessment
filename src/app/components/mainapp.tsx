"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import {  useSearchParams } from 'next/navigation'

import ErrorMessage from "../components/errormessage";
import CountryTable from "../components/countrytable";

import { ApiResponse, OlympicResult } from "../constants/apptypes";

import api from '../api'
import { sortOlympicResults, SortKey } from './countrytable/sortlogic'




const MainApp = () => {
    const getAppParams = useSearchParams()
    const { sort } = Object.fromEntries(getAppParams.entries()) as { sort?: SortKey };

    const [olympicResults, setolympicResults] = useState<OlympicResult[]>([]);
    const [errorMessage, seterrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getResults();
            if (result.error) {
                seterrorMessage(result.error);
            } else if (result.data) {
                console.log(sort, 'sort')
                setolympicResults(sortOlympicResults(result.data, sort ? sort : 'gold'));
            }
        };

        fetchData()
    }, [])

    const sortResults = (medalType: SortKey) => {
        setolympicResults(sortOlympicResults(olympicResults, medalType))
    }



    const getResults = async (): Promise<ApiResponse<OlympicResult[]>> => {
        try {
            const response = await api.get<OlympicResult[]>('/olympicresults');
            return {
                data: response.data,
                error: null,
            };
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return {
                    data: null,
                    error: err.response?.data?.message || err.message || 'Axios error occurred',
                };
            } else {
                return {
                    data: null,
                    error: 'An unexpected error occurred',
                };
            }
        }
    };

    return (
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" >
            {errorMessage ? <ErrorMessage message={errorMessage} /> : ''}
            <CountryTable data={olympicResults} sortFunc={sortResults} />
        </div>
    );
};

export default MainApp