import './Settings.scss'
import {t} from "../../utils/i18n.ts";
import {ArrowBigLeft} from "lucide-react";
import {type Theme, useTheme} from "../../hooks/useTheme.ts";

type SettingsProps = {
    goBack: () => void,
};

const Settings = ({goBack}: SettingsProps) => {

    const { theme, setTheme } = useTheme();

    const themes: Theme[] = ['light', 'auto', 'dark']

    const getIndicatorLeftPosition = () => {
        const spanWidth: number = 55;

        const getPx = (left: number) => `${left}px`;
        switch (theme) {
            case "light":
                return getPx(0 * spanWidth);
            case "auto":
                return getPx(1 * spanWidth);
            case "dark":
                return getPx(2 * spanWidth);
        }
    };

    const switchItemClass= (value: string) => {
        return value === theme ? 'active' : '';
    }

    return (
        <div className="settings">
            <header>
                <button className="back-btn secondary" onClick={goBack}><ArrowBigLeft/></button>
                <h3>{t('settings')}</h3>
            </header>

            <main>
                <div className="setting">
                    <label>Mode</label>

                    <div className="switch">
                        {
                            themes.map((theme) => <span className={switchItemClass(theme)} onClick={() => setTheme(theme)}>{t(theme)}</span>)
                        }
                        <span className="indicator" style={{left: getIndicatorLeftPosition()}}></span>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Settings;