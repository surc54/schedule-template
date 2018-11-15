export class Class {
    /**
     * Create class object
     * @param {Object} options
     * @param {string} options.courseCode
     * @param {string} options.name
     * @param {number} options.classNumber
     * @param {string[]} options.instructors
     * @param {Meeting[]} options.meetings;
     */
    constructor(options) {
        this._courseCode = options.courseCode;
        this._name = options.name;
        this._classNumber = options.classNumber;
        this._instructors = options.instructors;
        this._meetings = options.meetings;
    }

    get courseCode() {
        return this._courseCode;
    }

    get name() {
        return this._name;
    }

    get classNumber() {
        return this._classNumber;
    }

    get instructors() {
        return this._instructors;
    }

    get meetings() {
        return this._meetings;
    }
}

export class Meeting {
    /**
     *
     * @param {string[]|string} meetDays
     * @param {number} meetBegin
     * @param {number} meetEnd
     */
    constructor(meetDays, meetBegin, meetEnd) {
        if (Array.isArray(meetDays)) {
            this._meetDays = meetDays;
        } else {
            this._meetDays = meetDays.split(" ");
        }
        this._meetBegin = meetBegin;
        this._meetEnd = meetEnd;
    }


    get days() {
        return this._meetDays;
    }

    get startPeriod() {
        return this._meetBegin;
    }

    get endPeriod() {
        return this._meetEnd;
    }
}