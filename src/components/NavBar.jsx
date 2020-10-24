import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import RoomIcon from '@material-ui/icons/Room';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function NavBar({ onChangeNavIcon, selectedNavIcon }) {
    return (
      <React.Fragment>
        <BottomNavigation
            value={selectedNavIcon}
            onChange={(event, newValue) => {
                onChangeNavIcon(newValue);
            }}
            showLabels
        >
        <BottomNavigationAction value="pace" label="Pace" icon={<DirectionsRunIcon />} />
        <BottomNavigationAction value="distance" label="Distance" icon={<RoomIcon />} />
        <BottomNavigationAction value="time" label="Time" icon={<AccessTimeIcon />} />
        </BottomNavigation>
      </React.Fragment>
  );
}
