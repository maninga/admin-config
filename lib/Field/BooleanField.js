import ChoiceField from "./ChoiceField";

class BooleanField extends ChoiceField {
    constructor(name) {
        super(name);
        this._type = "boolean";
        this._choices = [
            { value: null, label: 'undefined' }, 
            { value: true, label: 'true' }, 
            { value: false, label: 'false' }
        ];
    }
}

export default BooleanField;
