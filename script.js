
function calculate() {
    const entry1 = parseFloat(document.getElementById('entry1').value);
    const size1 = parseFloat(document.getElementById('size1').value);
    const leverage = parseFloat(document.getElementById('leverage').value);
    const target = parseFloat(document.getElementById('targetPrice').value);
    const buy2 = parseFloat(document.getElementById('buyPrice2').value);

    if (isNaN(entry1) || isNaN(size1) || isNaN(leverage) || isNaN(target) || isNaN(buy2)) {
        document.getElementById('result').innerText = 'Please fill all fields correctly.';
        return;
    }

    const totalCost1 = entry1 * size1;
    const totalPos = (target * (size1 * entry1)) / (target - buy2 * leverage);
    const size2 = totalPos - size1;

    document.getElementById('result').innerText = 
        'You need to buy ≈ ' + size2.toFixed(4) + ' contracts at ' + buy2 + ' to average down to ' + target + '.';
}
