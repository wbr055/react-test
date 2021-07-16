import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {getApps} from "./api";
import {AppCard, RefreshButton, Filters} from "./components";

/**
 * @typedef {{green: boolean, yellow:boolean, red:boolean}} statusFilters
 */

/**
 * Filter the appList based on the selected statuses (green,yellow,red)
 * @param {[AppObject]} appList
 * @param {statusFilters} statusFilters
 * @returns {[AppObject]} the filtered appList
 */
const filterAppListByStatus = (appList = [], statusFilters = {}) => {
    return appList
};


/**
 * This custom hook controls the filter selection state and applies the filters to the appList
 * @param {AppObject[]} appList - accepts the list returned from getApps;
 * @returns {{toggleStatusFilter: {Function(color:string)}, statusFilters: {statusFilters}, filteredList: {AppObject[]} }}
 */
const useFilteredListState = (appList = []) => {

    const [statusFilters, setStatusFilters] = useState({
        green: true, yellow: true, red: true
    });


    const filteredList = filterAppListByStatus(appList, statusFilters);

    /**
     * toggle the boolean and set the status filter state
     * @param {string} color - accepts the filter color based on the checkbox that was clicked
     */
    const toggleStatusFilter = color => {
        //setStatusFilters
    };

    return {filteredList, toggleStatusFilter, statusFilters}

}


const AppComponent = () => {
    const [{data, fetching, error}, seteState] = useState({
        data: undefined, fetching: false, error: undefined
    });

    const {filteredList, toggleStatusFilter, statusFilters} = useFilteredListState(data);

    const fetchApps = async () => {
        // state should be updated to indicate the progress of the fetch cycle

        // call getApps() and set the data to state

        // make sure to catch any errors that occur
    }

    /*
        use the proper react hook to call fetchApps() when the component mounts
     */

    /*
        The user can initiate a refresh of data by clicking the refresh button.
        Determine a condition to indicate to the user that data is refreshing.
        it should only indicate refreshing for subsequent requests after the initial fetch cycle.
    */
    const isRefreshing = false;

    return (
        <div className={'p2'}>
            <h1>App Statuses (React Interview)</h1>
            <RefreshButton
                refreshing={isRefreshing}
                onClick={fetchApps}/>

            <Filters
                toggleStatusFilter={toggleStatusFilter}
                statusFilters={statusFilters}/>

            <div className={'flex flexWrap'}>
                {/*

                    render the filteredList here using the <AppCard/> component for each item in the list

                    show "loading..." while data is being fetched

                    and indicate when there is an error


                */}
            </div>

        </div>
    )

}

ReactDOM.render(<AppComponent/>, document.getElementById('root'));

