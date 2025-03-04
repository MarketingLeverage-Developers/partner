import DriverContainer from '@/headful/DriverContainer/DriverContainer';
import DriverWrapper from '@/headful/DriverContainer/DriverWrapper/DriverWrapper';
import IntroContactWrapper from '@/headful/IntroContainer/IntroContactWrapper/IntroContactWrapper';
import IntroContainer from '@/headful/IntroContainer/IntroContainer';
import LicenseContainer from '@/headful/LicenseContainer/LicenseContainer';
import LicenseWrapper from '@/headful/LicenseContainer/LicenseWrapper/LicenseWrapper';
import MeritContainer from '@/headful/MeritContainer/MeritContainer';
import MeritWrapper from '@/headful/MeritContainer/MeritWrapper/MeritWrapper';

export default function Home() {
    return (
        <>
            <IntroContainer>
                <IntroContactWrapper />
            </IntroContainer>
            <LicenseContainer>
                <LicenseWrapper />
            </LicenseContainer>
            <DriverContainer>
                <DriverWrapper />
            </DriverContainer>
            <MeritContainer>
                <MeritWrapper />
            </MeritContainer>
        </>
    );
}
