
const form = document.querySelector('#calculator');
        const numberBtn = document.querySelectorAll('[data-number]');
        const operationBtn = document.querySelectorAll('[data-operation]');
        const decimalBtn = document.querySelector('[data-decimal]');
        const cleanBtn = document.querySelector('[data-clean]');

        let memoryCurrentNumber = 0;
        let memoryNextNumber = false;
        let memoryOperation = '';

        const pressNumber = (num) => {
            if (memoryNextNumber) {
                form.textview.value = num;
                memoryNextNumber = false;
            } else {
                if (form.textview.value === '0') {
                    form.textview.value = num;
                } else {
                    form.textview.value += num;
                }
            }
        }

        const pressOperation = (op) => {
            let localOperationMemory = form.textview.value;
            if (memoryNextNumber && memoryOperation !== '=') {
                form.textview.value = memoryCurrentNumber;
            } else {
                memoryNextNumber = true;
                if (memoryOperation === '+') {
                    memoryCurrentNumber += parseFloat(localOperationMemory);
                } else if (memoryOperation === '-') {
                    memoryCurrentNumber -= parseFloat(localOperationMemory);
                } else if (memoryOperation === '*') {
                    memoryCurrentNumber *= parseFloat(localOperationMemory);
                } else if (memoryOperation === '/') {
                    memoryCurrentNumber /= parseFloat(localOperationMemory);
                } else {
                    memoryCurrentNumber = parseFloat(localOperationMemory);
                }
                form.textview.value = memoryCurrentNumber;
                memoryOperation = op;
            }
        }

        const decimal = (dec) => {
            let localDecimalMemory = form.textview.value;
            if (memoryNextNumber) {
                localDecimalMemory = '0.';
                memoryNextNumber - false;
            } else {
                if (!localDecimalMemory.includes('.')) {
                    localDecimalMemory += '.';
                }
            }
            form.textview.value = localDecimalMemory;
        }


        numberBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                pressNumber(e.target.dataset.number);
            });
        });

        operationBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                pressOperation(e.target.dataset.operation);
            });
        });

        decimalBtn.addEventListener('click', (e) => {
            decimal(e.target.dataset.decimal);
        });

        cleanBtn.addEventListener('click', () => {
            form.reset();
        })
