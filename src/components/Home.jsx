import React from 'react';
import Pace from './Pace';
import Distance from './Distance';
import Time from './Time';
import Footer from './Footer';

export default function Home({ selectedNavIcon }) {
    return (
        <React.Fragment>
            {selectedNavIcon === "pace" ? <Pace />
                : selectedNavIcon === "distance" ? <Distance />
                    : <Time />}
            <Footer />
        </React.Fragment>
  );
}