export let status = 1;

export function updateStatus(setStatus) {
    if (status === 1) {
        status = 2;
        setStatus(2);
    }

    else {
        status = 1;
        setStatus(1);
    }

}


export function setstatus(setStatus, newStatus) {
    const oldstatus = status;
    status = newStatus;
    if (oldstatus === 1) {
        status = 1;
        setStatus(1);
    }
    if (newStatus === 2 && status !== 1) {
        status = 2;
        setStatus(2);
    }
    if (status === 3) {
        status = 3;
        setStatus(3);
    }
    if (status === 4) {
        status = 4;
        setStatus(4);
    }
    if (status === 5) {
        status = 5;
        setStatus(5);
    }
    if (status === 6) {
        status = 6;
        setStatus(6);
    }
    if (status === 7) {
        status = 7;
        setStatus(7);
    }
    if (status === 8) {
        status = 8;
        setStatus(8);
    }

}

export let actcard = 1;
export function checkcard(setCurrentActcard, newactcard,) {


    if (status === 2) {
        actcard = actcard + newactcard;

        if (actcard > 12) {
            actcard = 1; // Возвращаемся к 1, если превышает 12
        } else if (actcard < 1) {
            actcard = 12; // То же поведение, если нужно учитывать границы
        }

        setCurrentActcard(actcard);

    }
    else {
        actcard = 1;
    }


}

let activeCardId = null;
export function perehod(setCurrentStatus) {
    const activeCard = document.querySelector('.activ');
    if (activeCard) {
        activeCardId = parseInt(activeCard.id);
        status = activeCardId;
        setCurrentStatus(status);

    } else {
        activeCardId = null;

    }
}

