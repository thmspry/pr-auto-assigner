import {Trash2} from "lucide-react";
import './Person.scss'

type PersonProps = {
    person: string,
    correspondToInput: boolean,
    onClick: () => void
}
const Person = ({person, onClick, correspondToInput}: PersonProps) => {
    const personClasses = (): string => {
      let classes = 'person';
      if(correspondToInput) {
          classes += ' correspond-to-input'
      }
      return classes;
    }

    return (
        <div className={personClasses()} onClick={onClick}>
            <span>{person}</span>
            <div className="delete-layer">
                <Trash2 className="delete-icon" size={14} color="#cb6465"/>
            </div>
        </div>
    );
};

export default Person;