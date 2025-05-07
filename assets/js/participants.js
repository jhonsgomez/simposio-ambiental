document.addEventListener('DOMContentLoaded', function () {
    var tabEl = document.querySelector('#participantTabs');
    var tab = new bootstrap.Tab(tabEl.querySelector('.nav-link.active'));
    tab.show();
});