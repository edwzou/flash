import React from 'react';
import { Quicklook } from '../components/Quicklook/Quicklook';
import { Listing } from '../components/Listing';

export const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-7">
                <div className="flex flex-col gap-7">
                    <Listing fast={true} />
                    <Listing fast={false} />
                </div>
                <Quicklook />
            </div>
        </div>
    );
};
