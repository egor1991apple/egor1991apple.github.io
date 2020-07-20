let utilTimer = function(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds - hours * 3600 - minutes * 60;

    // round seconds
    seconds = Math.round(seconds * 100) / 100;

    let result = '';
    result += minutes < 10 ? '0' + Math.round(minutes) : Math.round(minutes);
    result += ':' + (seconds < 10 ? '0' + Math.round(seconds) : Math.round(seconds));
    return result;
};

export default utilTimer;