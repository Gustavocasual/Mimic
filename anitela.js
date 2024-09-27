function openPageAfter3Seconds() {

    let temponho = setInterval(() => {
        window.location.href = 'index2.html';
        clearInterval(temponho); 
    }, 3500); 
}

openPageAfter3Seconds();
