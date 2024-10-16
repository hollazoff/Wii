export let status = 1;

export function updateStatus(setStatus) {
    if (status === 1) {
        status = 2;
        setStatus(2);
    } else {
        status = 1;
        setStatus(1);
    }
    console.log('status', status);
}