import './Settings.scss'
import {t} from "../../utils/i18n.ts";
import {ArrowBigLeft, ChevronRight, FileDown, FileUp} from "lucide-react";
import {type Theme, useTheme} from "../../hooks/useTheme.ts";
import type {StorageData} from "../../types/storage-data.ts";

type SettingsProps = {
    goBack: () => void,
    configuration: StorageData
};

const Settings = ({goBack, configuration}: SettingsProps) => {

    const {theme, setTheme} = useTheme();

    const themes: Theme[] = ['light', 'auto', 'dark'];

    const downloadConfiguration = () => {
        const a = document.createElement("a")
        a.href = URL.createObjectURL(
            new Blob([JSON.stringify(configuration)], {type:"application/json"})
        )
        a.download = "pr-auto-assigner-configuration.json"
        a.click();
    }

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

    const switchItemClass = (value: string) => {
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
                    <label>{t('mode')}</label>

                    <div className="switch">
                        {
                            themes.map((theme) => <span className={switchItemClass(theme)}
                                                        onClick={() => setTheme(theme)}>{t(theme)}</span>)
                        }
                        <span className="indicator" style={{left: getIndicatorLeftPosition()}}></span>
                    </div>
                </div>

                <div className="setting">
                    <label>{t('Configuration')}</label>

                    <div className="import-export">
                        <div className="import-export-card">
                            <FileDown/>
                            <div className="text">
                                <span>{t('import')}</span>
                                <span>{t('import_config')}</span>
                            </div>
                            <ChevronRight/>
                        </div>

                        <div className="import-export-card" onClick={downloadConfiguration}>
                            <FileUp/>
                            <div className="text">
                                <span>{t('export')}</span>
                                <span>{t('export_config')}</span>
                            </div>
                            <ChevronRight/>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Settings;