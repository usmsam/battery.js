navigator.getBattery().then(function (battery) {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo()


  battery.addEventListener('chargingchange', function () {
    updateChargeInfo();
  });

  function updateChargeInfo() {
    if (battery.charging) {
      document.querySelector('#status').innerHTML = 'CHARGING NOW';
      document.querySelector('#battery-lvl').classList.add('active');
    } else {
      document.querySelector('#status').innerHTML = 'Discharging';
      document.querySelector('#battery-lvl').classList.remove('active');
    }

  }

  battery.addEventListener('levelchange', updateLevelInfo);
  function updateLevelInfo() {
    console.log(battery.level);
    document.querySelector('#battery-lvl-digit').innerHTML = Math.floor( battery.level * 100 )+ '%';
    document.querySelector('#battery-lvl').style.width = battery.level * 100 + '%';
  }
})



