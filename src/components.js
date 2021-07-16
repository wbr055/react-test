import React from 'react';
// displays the AppObject
export const AppCard = ({name, status}) => (
    <div className={'p1 flex aic'}>
        <div className={'statusCircle'} style={{background: status}}/>
        <div className={'ml1'}>
            {name}
        </div>
    </div>
);

// manually fetch the apps to refresh the data
// indicates the refreshing state
export const RefreshButton = ({onClick, refreshing}) => (
    <div className={'pl1'}>
        <button className={'btn'} onClick={onClick}>
            Refresh
        </button>
        {refreshing && <span className={'pl1'}>Refreshing...</span>}
    </div>
);


const CheckBox = ({label, checked, onClick}) => (
    <label className={'p1 mr1 flex aic'}>
        <div>{label}</div>
        <input type={'checkbox'} onClick={onClick} defaultChecked={checked}/>
    </label>
);


export const Filters = ({statusFilters = {}, toggleStatusFilter = () => ({})}) => (
    <div className={'p1 flex aic'}>
        {Object.keys(statusFilters).map(color => (
            <CheckBox key={color} label={color} checked={statusFilters[color]} onClick={() => {
                toggleStatusFilter(color)
            }}/>
        ))}
    </div>
);
