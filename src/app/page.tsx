import ApiCaller from '@/components/ApiCaller';
import ContactContainer from '@/headful/ContactContainer/ContactContainer';
import DriverContainer from '@/headful/DriverContainer/DriverContainer';
import InfoContainer from '@/headful/InfoContainer/InfoContainer';
import IntroContainer from '@/headful/IntroContainer/IntroContainer';
import LicenseContainer from '@/headful/LicenseContainer/LicenseContainer';
import MeritContainer from '@/headful/MeritContainer/MeritContainer';
import PossibleContainer from '@/headful/PossibleContainer/PossibleContainer';
import ReviewContainer from '@/headful/ReviewContainer/ReviewContainer';
import { Suspense } from 'react';

export default function Home() {
    return (
        <>
            <IntroContainer />
            <LicenseContainer />
            <DriverContainer />
            <MeritContainer />
            <PossibleContainer />
            <ReviewContainer />
            <ContactContainer />
            <InfoContainer />
            <Suspense fallback={<div></div>}>
                <ApiCaller />
            </Suspense>
        </>
    );
}
