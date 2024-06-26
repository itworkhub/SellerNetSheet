

(function (window) {
    window.numeral.locale('');
})(this);

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    const applicationInputs = document.querySelectorAll(
        '.application input:not([type="hidden"]), .application select, .application textarea');

        const APY = {};

APY.config = {
    }

APY.cells = {};


            APY.cells.s0r0c0 = {v: 'Seller\u0027s\u0020Estimated\u0020Net\u0020Analysis',
                t: 'text',
                f: ''
            };
                APY.cells.s0r5c0 = {v: 'Seller\u0020Credits',
                t: 'text',
                f: ''
            };
                APY.cells.s0r5c2 = {v: 'Low',
                t: 'text',
                f: ''
            };
                APY.cells.s0r5c4 = {v: 'Mid',
                t: 'text',
                f: ''
            };
                APY.cells.s0r5c6 = {v: 'High',
                t: 'text',
                f: ''
            };
                APY.cells.s0r6c0 = {v: 'Sales\u0020Price',
                t: 'text',
                f: ''
            };
    APY.cells.s0r6c2 = {v: 342000,i: 342000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r6c4 = {v: 347500,i: 347500,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r6c6 = {v: 352500,i: 352500,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r7c0 = {v: 'Other\u0020Credits\u0020to\u0020Seller',
                t: 'text',
                f: ''
            };
    APY.cells.s0r7c2 = {v: 0,i: 0,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r7c4 = {v: 0,i: 0,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r7c6 = {v: 0,i: 0,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r8c0 = {v: 'Estimated\u0020Seller\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r9c0 = {v: '1st\u0020Mortgage\u0020Payoff',
                t: 'text',
                f: ''
            };
    APY.cells.s0r9c2 = {v: -100000,i: -100000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r9c4 = {v: -100000,i: -100000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r9c6 = {v: -100000,i: -100000,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r10c0 = {v: '2nd\u0020Mortgage\u0020Payoff',
                t: 'text',
                f: ''
            };
    APY.cells.s0r10c2 = {v: -5000,i: -5000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r10c4 = {v: -5000,i: -5000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r10c6 = {v: -5000,i: -5000,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r11c0 = {v: 'Other\u0020Liens\u0020or\u0020loans',
                t: 'text',
                f: ''
            };
    APY.cells.s0r11c2 = {v: -1250,i: -1250,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r11c4 = {v: -1250,i: -1250,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r11c6 = {v: -1250,i: -1250,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r12c0 = {v: 'Estimated\u0020Closing\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r13c0 = {v: 'Realtor\u0020Commissions\u0020\u0028\u0025\u0029',
                t: 'text',
                f: ''
            };
    APY.cells.s0r13c2 = {v: 0.06,i: 0.06,t: 'number',
                f: '0.[000000000]%'
            };    APY.cells.s0r13c4 = {v: 0.06,i: 0.06,t: 'number',
                f: '0.[000000000]%'
            };    APY.cells.s0r13c6 = {v: 0.06,i: 0.06,t: 'number',
                f: '0.[000000000]%'
            };                APY.cells.s0r14c0 = {v: 'Realtor\u0020Commissions\u0020\u0028\u0024\u0029',
                t: 'text',
                f: ''
            };
    APY.cells.s0r14c2 = {v: -20520,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r14c4 = {v: -20850,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r14c6 = {v: -21150,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r15c0 = {v: 'Owner\u0027s\u0020Title\u0020Insurance',
                t: 'text',
                f: ''
            };
    APY.cells.s0r15c2 = {v: -3420,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r15c4 = {v: -3475,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r15c6 = {v: -3525,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r16c0 = {v: 'Document\u0020Preparation\u0020fees',
                t: 'text',
                f: ''
            };
    APY.cells.s0r16c2 = {v: -200,i: -200,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r16c4 = {v: -200,i: -200,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r16c6 = {v: -200,i: -200,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r17c0 = {v: 'Recording\u0020fees',
                t: 'text',
                f: ''
            };
    APY.cells.s0r17c2 = {v: -125,i: -125,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r17c4 = {v: -125,i: -125,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r17c6 = {v: -125,i: -125,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r18c0 = {v: 'Prorated\u0020Property\u0020taxes',
                t: 'text',
                f: ''
            };
    APY.cells.s0r18c2 = {v: -2000,i: -2000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r18c4 = {v: -2000,i: -2000,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r18c6 = {v: -2000,i: -2000,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r19c0 = {v: 'Tax\u0020Certificate',
                t: 'text',
                f: ''
            };
    APY.cells.s0r19c2 = {v: -50,i: -50,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r19c4 = {v: -50,i: -50,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r19c6 = {v: -50,i: -50,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r20c0 = {v: 'Escrow\u0020fees',
                t: 'text',
                f: ''
            };
    APY.cells.s0r20c2 = {v: -450,i: -450,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r20c4 = {v: -450,i: -450,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r20c6 = {v: -450,i: -450,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r21c0 = {v: 'Other\u0020Title\u0020Company\u0020fees',
                t: 'text',
                f: ''
            };
    APY.cells.s0r21c2 = {v: -25,i: -25,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r21c4 = {v: -25,i: -25,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r21c6 = {v: -25,i: -25,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r22c0 = {v: 'Optional\u0020Seller\u0020Costs',
                t: 'text',
                f: ''
            };
                APY.cells.s0r23c0 = {v: 'Seller\u0020provided\u0020home\u0020warranty',
                t: 'text',
                f: ''
            };
    APY.cells.s0r23c2 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r23c4 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r23c6 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r24c0 = {v: 'Buyer\u0020closing\u0020cost\u0020credits',
                t: 'text',
                f: ''
            };
    APY.cells.s0r24c2 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r24c4 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r24c6 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r25c0 = {v: 'Inspection\u0020repairs\u0020\/\u0020buyer\u0020credits',
                t: 'text',
                f: ''
            };
    APY.cells.s0r25c2 = {v: -450,i: -450,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r25c4 = {v: -500,i: -500,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r25c6 = {v: -600,i: -600,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r26c0 = {v: 'Other\u0020Miscellaneous\u0020costs',
                t: 'text',
                f: ''
            };
    APY.cells.s0r26c2 = {v: -100,i: -100,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r26c4 = {v: -100,i: -100,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r26c6 = {v: -100,i: -100,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r28c0 = {v: 'NET\u0020OFFER\u0020SUMMARY',
                t: 'text',
                f: ''
            };
    APY.cells.s0r28c2 = {v: 207210,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r28c4 = {v: 212275,t: 'number',
                f: '$0,0'
            };    APY.cells.s0r28c6 = {v: 216825,t: 'number',
                f: '$0,0'
            };                APY.cells.s0r29c2 = {v: 'The\u0020costs\u0020shown\u0020on\u0020this\u0020sheet\u0020are\u0020approximations\u0020based\u0020on\u0020information\u0020available\u0020at\u0020the\u0020time,\u0020and\u0020are\u0020subject\u0020to\u0020change\u0020at\u0020closing.\u0020We\u0020assume\u0020no\u0020liability\u0020for\u0020the\u0020accuracy\u0020of\u0020estimates.',
                t: 'text',
                f: ''
            };
    
        
    APY.formulas = {
                s0r14c2: function() { APY.set('s0r14c2',-APY.RANGE([0,13,2])*APY.RANGE([0,6,2])) },
                    s0r14c4: function() { APY.set('s0r14c4',-APY.RANGE([0,13,4])*APY.RANGE([0,6,4])) },
                    s0r14c6: function() { APY.set('s0r14c6',-APY.RANGE([0,13,6])*APY.RANGE([0,6,6])) },
                    s0r15c2: function() { APY.set('s0r15c2',-0.01*APY.RANGE([0,6,2])) },
                    s0r15c4: function() { APY.set('s0r15c4',-0.01*APY.RANGE([0,6,4])) },
                    s0r15c6: function() { APY.set('s0r15c6',-0.01*APY.RANGE([0,6,6])) },
                    s0r28c2: function() { APY.set('s0r28c2',APY.RANGE([0,6,2])+APY.RANGE([0,7,2])+APY.RANGE([0,9,2])+APY.RANGE([0,10,2])+APY.RANGE([0,11,2])+APY.RANGE([0,14,2])+APY.RANGE([0,15,2])+APY.RANGE([0,16,2])+APY.RANGE([0,17,2])+APY.RANGE([0,18,2])+APY.RANGE([0,19,2])+APY.RANGE([0,20,2])+APY.RANGE([0,21,2])+APY.RANGE([0,23,2])+APY.RANGE([0,24,2])+APY.RANGE([0,25,2])+APY.RANGE([0,26,2])) },
                    s0r28c4: function() { APY.set('s0r28c4',APY.RANGE([0,6,4])+APY.RANGE([0,7,4])+APY.RANGE([0,9,4])+APY.RANGE([0,10,4])+APY.RANGE([0,11,4])+APY.RANGE([0,14,4])+APY.RANGE([0,15,4])+APY.RANGE([0,16,4])+APY.RANGE([0,17,4])+APY.RANGE([0,18,4])+APY.RANGE([0,19,4])+APY.RANGE([0,20,4])+APY.RANGE([0,21,4])+APY.RANGE([0,23,4])+APY.RANGE([0,24,4])+APY.RANGE([0,25,4])+APY.RANGE([0,26,4])) },
                    s0r28c6: function() { APY.set('s0r28c6',APY.RANGE([0,6,6])+APY.RANGE([0,7,6])+APY.RANGE([0,9,6])+APY.RANGE([0,10,6])+APY.RANGE([0,11,6])+APY.RANGE([0,14,6])+APY.RANGE([0,15,6])+APY.RANGE([0,16,6])+APY.RANGE([0,17,6])+APY.RANGE([0,18,6])+APY.RANGE([0,19,6])+APY.RANGE([0,20,6])+APY.RANGE([0,21,6])+APY.RANGE([0,23,6])+APY.RANGE([0,24,6])+APY.RANGE([0,25,6])+APY.RANGE([0,26,6])) },
        }
    ;

    APY.calculate = function () {
                        // Step 1
                APY.formulas.s0r14c2();
                APY.formulas.s0r14c4();
                APY.formulas.s0r14c6();
                APY.formulas.s0r15c2();
                APY.formulas.s0r15c4();
                APY.formulas.s0r15c6();
                APY.formulas.s0r28c2();
                APY.formulas.s0r28c4();
                APY.formulas.s0r28c6();
                                
        
            };
    
    APY.getValue = function (value, type, format) {
        type = type ? type : 'text';
        let returnedValue;
        if (type === 'boolean') {
            returnedValue = (value === 'true');
        } else if (type === 'number') {
            returnedValue = numeral(value).value();
        } else if (type === 'date') {
            const m = format ? moment(value, format) : moment(value);
            if (!!value && m.isValid()) {
                returnedValue = m.toDate();
            } else {
                returnedValue = null;
            }
        } else {
            returnedValue = value;
        }

        return returnedValue;
};

APY.set = function (cellId, value, parseValue = false) {
        const isCellAddress = /s\d*r\d*c\d*/.test(cellId);
        let cell;
        if (isCellAddress) {
            cell = APY.cells[cellId];
            if (!cell) {
                return;
            }
        } else {
            const cellIds = Object.keys(APY.cells).filter(function (cell) {
                return APY.cells[cell].name === cellId;
            });

            if (cellIds.length > 0) {
                cell = APY.cells[cellIds[0]];
                cellId = cellIds[0];
            } else {
                return;
            }
        }

        if (parseValue) {
            value = APY.getValue(value, cell.t, '');
        }

        cell.v = value;

        const cellElement = document.getElementById(cellId);
        if (!cellElement) {
            return;
        }

        if (APY.config.clearZeroInputs && cell.v === 0 && cellElement.matches('input')) {
            cellElement.value = null;
            return;
        }

        const displayedValue = APY.formatValue(value, cell.t, cell.f);
        if (cellElement.matches('div')) {
            cellElement.innerHTML = displayedValue;
            const output = document.getElementById(cellId + '-out');
            if (output) {
                output.value = displayedValue;
            }
        } else {
            cellElement.value = displayedValue;
        }
};

APY.setMatrix = function (cellId, value, matrixColumnsSpanned = 1, matrixRowsSpanned = 1) {
        for (let collOffset = 0; collOffset < matrixColumnsSpanned; collOffset++) {
            for (let rowOffSet = 0; rowOffSet < matrixRowsSpanned; rowOffSet++) {
                const regex = /s(\d+)r(\d+)c(\d+)/;
                const result = cellId.replace(regex, function (match, sheet, row, col) {
                    return 's' + sheet + 'r' + (parseInt(row, 10) + rowOffSet) + 'c' + (parseInt(col, 10) + collOffset);
                });

                APY.set(result, value[rowOffSet + collOffset])
            }
        }
};

APY.formatValue = function (value, type, format) {
        if (value instanceof Error) {
            return value.toString();
        }

        let formattedValue;
        if (value === null) {
            formattedValue = '';
        } else {
            formattedValue = value + '';
        }

        if (type === 'number') {
            if (value === null) {
                return '';
            }
            format = format ? format : '0.[000000000]';
            value = Math.abs(value) <= 1e-7 ? 0 : value;
            formattedValue = numeral(value).format(format);
        }

        if (type === 'date') {
            if (!value) {
                return value;
            }

            formattedValue = moment(value).format(format);
        }

        return formattedValue;
};

APY.getInputs = function () {
        const inputs = {};
        const applicationInputs = document.querySelectorAll('.application input:not([type="hidden"]), .application select, .application textarea');
        applicationInputs.forEach(function (inputElement) {
            let cellId = inputElement.id
            const cell = APY.cells[cellId];

            if (cell) {
                let value = cell.v;

                if (value instanceof Date) {
                    value = APY.dateToString(value);
                }

                // Use named range instead of cell location id
                if (cell.name) {
                    cellId = cell.name;
                }

                inputs[cellId] = {
                    value: value,
                    type: cell.t
                };
            }
        });

        return inputs;
};

APY.setInputs = function (data) {
        Object.keys(data).forEach(function (key) {
            if (data.hasOwnProperty(key)) {
                let value = data[key]?.value ?? data[key];
                APY.set(key, value, true);
            }
        });
};

APY.dateToString = function (date) {
        return date.getFullYear() + '-' +
            ((date.getMonth() + 1) < 10 ? '0' : '') +
            (date.getMonth() + 1) + '-' +
            (date.getDate() < 10 ? '0' : '') +
            date.getDate() +
            'T' +
            (date.getHours() < 10 ? '0' : '') +
            date.getHours() +
            ':' +
            (date.getMinutes() < 10 ? '0' : '') +
            date.getMinutes() +
            ':' +
            (date.getSeconds() < 10 ? '0' : '') +
            date.getSeconds();
};

APY.RANGE = function () {
        let value = null;
        if (arguments.length === 1) {
            const cellId = 's' + arguments[0][0] + 'r' + arguments[0][1] + 'c' + arguments[0][2];

            if (APY.cells && APY.cells.hasOwnProperty(cellId)) {
                value = APY.cells[cellId].v;
            }

            return value;
        } else if (arguments.length === 2) {
            const values = [];
            const head = arguments[0];
            const tail = arguments[1];
            for (let i = 0; i <= (tail[1] - head[1]); i++) {
                const row = [];
                for (let j = 0; j <= tail[2] - head[2]; j++) {
                    value = null;
                    const cellId = 's' + head[0] + 'r' + (head[1] + i) + 'c' + (head[2] + j);

                    if (APY.cells && APY.cells.hasOwnProperty(cellId)) {
                        value = APY.cells[cellId].v;
                    }
                    row.push(value);
                }
                values.push(row);
            }

            return values;
        }
};

APY.onSaveButtonClicked = function () {
        const blob = new Blob([JSON.stringify(APY.getInputs())], {type: 'application/json'});
        const fileName = document.title + ' ' + (new Date()).toISOString().slice(0, 10) + '.json';
        const url = window.URL.createObjectURL(blob);

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
};

APY.onDataFileSelected = function () {
        const file = document.getElementById('data-file');
        const blob = file.files[0];
        if (blob) {
            const reader = new FileReader();

            reader.onload = function (evt) {
                APY.setInputs(JSON.parse(evt.target.result));
                APY.calculate();
            };

            reader.onerror = function (evt) {
                console.error("An error occurred reading the file", evt);
            };

            reader.readAsText(blob, "UTF-8");
        }
};

APY.onCalculateButtonClicked = function () {
        APY.calculate();
};

APY.onSendButtonClicked = function () {
        document.querySelector('form.application').requestSubmit();
};

APY.onResetButtonClicked = function () {
        APY.resetState();
        APY.calculate();
    }

    APY.onSaveButtonClicked = function () {
        const blob = new Blob([JSON.stringify(APY.getInputs())], {type: 'application/json'});
        const fileName = document.title + ' ' + (new Date()).toISOString().slice(0, 10) + '.json';
        const url = window.URL.createObjectURL(blob);

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
};

formulajs.OFFSET = function (reference, rows, cols, height, width) {
        rows = rows >= 0 ? rows : 0;
        cols = cols >= 0 ? cols : 0;
        height = height >= 1 ? height : 1;
        width = width >= 1 ? width : 1;

        if (width === 1 && height === 1) {
            return APY.RANGE([reference[0], reference[1] + rows, reference[2] + cols]);
        } else {
            return APY.RANGE(
                [reference[0], reference[1] + rows, reference[2] + cols],
                [reference[0], reference[1] + rows + height - 1, reference[2] + cols + width - 1]
            );
        }
};

formulajs.HYPERLINK = function (url, text) {
        text = text === undefined ? url : text;
        return '<a href="' + url + '" target="_blank">' + text + '</a>';
};

// Expose Appizy App API called APY :)
window.APY = APY;


    APY.bindInputs = function () {
        applicationInputs.forEach(function (inputElement) {
            inputElement.addEventListener('change', function (event) {
                const cell = APY.cells[event.target.id];

                if (inputElement.type === 'checkbox') {
                    cell.v = event.target.checked;
                    inputElement.checked = event.target.checked;
                } else {
                    cell.v = APY.getValue(event.target.value, cell.t, cell.f);
                    inputElement.value = APY.formatValue(cell.v, cell.t, cell.f);
                }

                                APY.calculate();
                            })
        });
    }

    APY.resetState = function () {
        // Display formatted values in input fields on application start
        applicationInputs.forEach(function (inputElement) {
            var cell = APY.cells[inputElement.id];
            // Recompute Office value in Javascript value
            cell.v = APY.getValue(cell.i, cell.t);

            
            if (inputElement.type === 'checkbox') {
                inputElement.checked = cell.v;
            } else {
                inputElement.value = APY.formatValue(cell.v, cell.t, cell.f);
            }
        });
    }

    APY.init = function () {
        APY.bindInputs();
        APY.resetState();
        APY.calculate();
    };

    window.addEventListener('load', APY.init);

    
    
    
    
    
        document.querySelectorAll(".appizy a.switch-tab").forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            const href = anchor.getAttribute("href");
            const navAnchor = document.querySelector(href);
            bootstrap.Tab.getOrCreateInstance(navAnchor).show();
            event.preventDefault();
        });
    });
    });

