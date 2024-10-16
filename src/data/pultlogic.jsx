export { updateStatus };




let status = 1; // Инициализируем статус вне функции
function updateStatus() {
    if (status == 1) {
        status = 2;

    } else {
        status = 1;
    }
    console.log('status', status);
}

